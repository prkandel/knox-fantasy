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

        const personalBestWeekPoints = currentSeasonHistory.reduce((highest, current) => highest.points > current.points ? highest : current, currentSeasonHistory[0]).points

        let totalPoints = (currentSeasonHistory[currentSeasonHistory.length - 1]).total_points;
        const player = {
            entryName: entry.entry_name,
            playerName: entry.player_name,
            totalPoints,
            personalBestWeekPoints
        }
        players.push(player);
    }
    players.sort((a, b) => b.personalBestWeekPoints - a.personalBestWeekPoints)
    return players;
}