import { getEnv } from "./envs";

const root = "https://discord.com/api/v9";

export const getCommandsURL = (guildID) => {
  const env = getEnv();
  if (guildID)
    return `${root}/applications/${env.DISCORD_APPLICATION_ID}/guilds/${guildID}/commands`;
  else return `${root}/applications/${env.DISCORD_APPLICATION_ID}/commands`;
};

export const getUserURL = () => {
  return `${root}/users/@me`;
};

export const getGuildURL = (guildID) => {
  return `${root}/guilds/${guildID}`;
};

export const getGuildsURL = () => {
  return `${root}/users/@me/guilds`;
};
