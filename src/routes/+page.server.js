import {LEAGUE_STANDING_URL} from "../config/index.js";

export async function load() {
    const [standings] = await Promise.all([getStanding()]);
    return {
        fplData: {
            standings: standings
        }
    };
}

async function getStanding() {
    const response = await fetch(LEAGUE_STANDING_URL, {
        method: 'GET',
        mode: 'no-cors'
    });
    if (response.status != 200) {
        return undefined
    }
    const result = await response.json();
    return result.standings.results;
}