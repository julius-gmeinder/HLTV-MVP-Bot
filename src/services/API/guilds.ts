import { config } from "../../config";
import fetch from 'node-fetch';
import https from 'https';

export default {
  Add,
  Delete,
  Refresh
}

async function Add(guildId: string): Promise<void> {
  await fetch(config.API_BASE + `bot/Guilds?guildId=${guildId}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    agent: new https.Agent({
      rejectUnauthorized: false,
    })
  });
}

async function Delete(guildId: string): Promise<void> {
  await fetch(config.API_BASE + `bot/Guilds?guildId=${guildId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    agent: new https.Agent({
      rejectUnauthorized: false,
    })
  });
}

export async function Refresh(guildIds: Array<string>): Promise<void> {
  await fetch(config.API_BASE + `bot/Guilds/refresh`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guildIds),
    agent: new https.Agent({
      rejectUnauthorized: false,
    })
  });
}