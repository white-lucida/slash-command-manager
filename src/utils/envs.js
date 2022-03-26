export const getEnv = () => {
  if (process.env.DISCORD_BOT_TOKEN === undefined) throw new TypeError();
  if (process.env.DISCORD_APPLICATION_ID === undefined) throw new TypeError();
  const { DISCORD_BOT_TOKEN, DISCORD_APPLICATION_ID } = process.env;
  return {
    DISCORD_BOT_TOKEN,
    DISCORD_APPLICATION_ID,
  };
};
