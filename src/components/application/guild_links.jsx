import { GuildLink } from "./guild_link";

export const GuildLinks = ({ guilds }) => (
  <ul className="flex gap-4 m-0 list-none flex-wrap grow-0 shrink-0">
    {guilds.map((guild, i) => (
      <li key={i}>
        <GuildLink key={i} summary={guild.name} id={guild.id} />
      </li>
    ))}
  </ul>
);
