export const useGuild = (data) => {
  const root = "https://cdn.discordapp.com";
  if (!data) return undefined;

  return data.icon
    ? {
        name: data.name,
        icon: `${root}/icons/${data.id}/${data.icon}.png`,
        id: data.id,
      }
    : { name: data.name, id: data.id };
};
