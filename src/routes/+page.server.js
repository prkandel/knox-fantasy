import {API_DOMAIN, ENTRIES, EVENT_URL, LEAGUE_STANDING_URL} from "../config/index.js";

export async function load() {
    const [standings, event, players] = await Promise.all([getStanding(), getCurrentEventNumber(), getPlayerData()]);
    return {
        fplData: {
            event,
            standings,
            players
        }
    };
}

async function getStanding() {
    const response = await fetch(LEAGUE_STANDING_URL);
    if (!response.ok) {
        return undefined
    }
    const result = await response.json();
    return result.standings.results;
}

async function getCurrentEventNumber() {
    const response = await fetch(EVENT_URL);
    if (!response.ok) {
        return undefined
    }
    const result = await response.json();
    return result.status[0].event;
}

async function getPlayerData() {
    const players = [];
    // const player = {
    //     chips_used:'',
    //     entry_name:'',
    //     player_name:'',
    //     totalPoints:'',
    //     gw1ToGw9Points: '',
    //     gw10ToGw19Points: '',
    //     gw20ToGw28Points: '',
    //     gw29ToGw38Points: '',
    //     personalBestPoints: ''
    // }
    const entries = await (await fetch(ENTRIES)).json();


    for (const entry of entries) {
        let historyUrl = `${API_DOMAIN}/entry/${entry.entry}/history`
        const eventHistory = await (await fetch(historyUrl)).json();
        const currentSeasonHistory = eventHistory.current;
        const chips = eventHistory.chips.map(chip => chip.name);

        const personalBestWeekPoints = currentSeasonHistory.reduce((highest, current) => highest.points > current.points ? highest : current, currentSeasonHistory[0]).points

        const totalPoints = (currentSeasonHistory[currentSeasonHistory.length - 1]).total_points;

        const currentGwNegative = (currentSeasonHistory[currentSeasonHistory.length - 1]).event_transfers_cost;

        const allGwPoints = currentSeasonHistory.map(gw => gw.points - gw.event_transfers_cost);
        const extendedGwPointsArray = extendArray(allGwPoints);
        const quarterlyPoints = getQuarterlyPoints(extendedGwPointsArray);
        const player = {
            entryName: entry.entry_name,
            playerName: entry.player_name,
            totalPoints,
            personalBestWeekPoints,
            q1TotalPoints: quarterlyPoints[0],
            q2TotalPoints: quarterlyPoints[1],
            q3TotalPoints: quarterlyPoints[2],
            q4TotalPoints: quarterlyPoints[3],
            chips,
            currentGwNegative: -currentGwNegative
        }
        players.push(player);
    }
    return players;
}

function extendArray(givenArray) {
    const extendedArray = Array.from({length: 38}, (_, i) => {
        let extendValue = 0;
        if (i < givenArray.length) {
            extendValue = givenArray[i]
        }
        return extendValue;
    });
    return extendedArray;
}

function getQuarterlyPoints(extendedGwPointsArray) {
    const startingGwIndices = [0, 9, 19, 28];
    const endingGwIndices = [9, 19, 28, 38];
    const quarterlyPoints = Array.from({length: 4}, (_, i) => {
        return extendedGwPointsArray.slice(startingGwIndices[i], endingGwIndices[i]).reduce((acc, item) => acc+item, 0)
    });
    return quarterlyPoints;
}