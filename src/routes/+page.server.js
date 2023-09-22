import {EVENT_URL, LEAGUE_STANDING_URL} from "../config/index.js";

export async function load() {
    const [standings, event] = await Promise.all([getStanding(), getCurrentEventNumber()]);
    return {
        fplData: {
            event: event,
            standings: standings
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