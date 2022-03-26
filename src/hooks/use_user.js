export const useUser = (data) => {
  const root = "https://cdn.discordapp.com";

  if (data === undefined) return undefined;

  const name = `${data.username}#${data.discriminator}`;

  return data.avatar
    ? {
        avatar: `${root}/avatars/${data.id}/${data.avatar}.png`,
        name,
      }
    : {
        name,
      };
};
