import { DISCORD_CDN_ROOT } from "../../../utils/constants";
import { Avatar } from "../../ui/Avatar";

export function UserInfo({ user }) {
  if (!user) return null;
  const src =
    user.avatar && user.id
      ? `${DISCORD_CDN_ROOT}/avatars/${user.id}/${user.avatar}.png`
      : null;
  return <Avatar src={src} name={user.username} description="User" />;
}
