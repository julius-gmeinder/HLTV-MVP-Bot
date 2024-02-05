import { config } from "../../config";
import fetch from 'node-fetch';
import https from 'https';

export function AddGuildToDB(guildId: string) {
    (async () => {
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
    })();
}

export function DeleteGuildFromDB(guildId: string) {
    (async () => {
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
    })();
}

export function RefreshGuildsInDB(guildIds: Array<string>) {
    (async () => {
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
    })();
}