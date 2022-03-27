import { DISCORD_CDN_ROOT } from "../../../../utils/constants";
import { Avatar } from "../../../ui/Avatar";

export function GuildInfo({ guild }) {
  if (!guild) return null;
  const src =
    guild.id && guild.icon
      ? `${DISCORD_CDN_ROOT}/icons/${guild.id}/${guild.icon}.png`
      : null;
  return <Avatar src={src} name={guild.name} description="Server" />;
}
