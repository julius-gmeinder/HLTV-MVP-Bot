import { config } from "../../config";
import fetch, { Response } from 'node-fetch';
import https from 'https';
import { LiveMatchAlertSetup } from "../../models";

export default {
    GetChannels,
    Setup,
    Remove,
}

async function GetChannels(): Promise<Response> {
    const res = await fetch(config.API_BASE + `bot/LiveMatchAlerts`, {
        agent: new https.Agent({
            rejectUnauthorized: false,
        })
    });
    return res;   
}

async function Setup(setup: LiveMatchAlertSetup): Promise<Response> {
    const res = await fetch(config.API_BASE + `bot/LiveMatchAlerts/setup`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            guildId: setup.guildId,
            liveMatchAlertChannelId: setup.liveMatchAlertChannelId
        }),
        agent: new https.Agent({
            rejectUnauthorized: false,
        })
    });
    return res;
}

async function Remove(guildId: string): Promise<Response> {
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