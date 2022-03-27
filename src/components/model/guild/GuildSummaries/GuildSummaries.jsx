import { GuildSummaryCard } from "../GuildSummaryCard";
import { GuildSummaryHeader } from "../GuildSummaryHeader";
import { GuildSummaryLink } from "../GuildSummaryLink";

export function GuildSummaries({ guilds }) {
  if (!guilds) return null;
  return (
    <ul className="flex gap-4 m-0 list-none flex-wrap grow-0 shrink-0">
      {guilds.map((guild) => (
        <GuildSummaryCard key={guild.id}>
          <GuildSummaryHeader>{guild.name}</GuildSummaryHeader>
          <GuildSummaryLink href={`/guilds/${guild.id}`} />
        </GuildSummaryCard>
      ))}
    </ul>
  );
}
