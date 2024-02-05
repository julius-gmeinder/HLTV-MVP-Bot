import { config } from "../../config";
import fetch, { Response } from 'node-fetch';
import https from 'https';
import { LiveMatchAlertSetup } from "../../models";

export async function GetChannels() {
    const res = await fetch(config.API_BASE + `bot/LiveMatchAlerts`, {
        agent: new https.Agent({
            rejectUnauthorized: false,
        })
    });
    return res;   
}

export async function SetupLiveMatchAlert({guildId, liveMatchAlertChannelId}: LiveMatchAlertSetup): Promise<Response> {
    const res = await fetch(config.API_BASE + `bot/LiveMatchAlerts/setup`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            guildId: guildId,
            liveMatchAlertChannelId: liveMatchAlertChannelId
        }),
        agent: new https.Agent({
            rejectUnauthorized: false,
        })
    });
    return res;
}

export async function RemoveLiveMatchAlert(guildId: string): Promise<Response> {
    const res = await fetch(config.API_BASE + `bot/LiveMatchAlerts/remove?guildId=${guildId}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        agent: new https.Agent({
            rejectUnauthorized: false,
        })
    });
    return res;
}