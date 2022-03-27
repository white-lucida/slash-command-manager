import { getEnv } from "./envs";

export const DISCORD_CDN_ROOT = "https://cdn.discordapp.com";

export const getHeaders = () => {
  const env = getEnv();
  return {
    "Content-Type": "application/json",
    Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
  };
};
