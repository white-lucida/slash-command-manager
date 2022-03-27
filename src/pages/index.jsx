import Error from "next/error";

import { Header } from "../components/nav/header/header";
import { Layout } from "../components/nav/layout/layout";

import { GuildSummaryCard } from "../components/model/guild/GuildSummaryCard";
import { GuildSummaryHeader } from "../components/model/guild/GuildSummaryHeader";
import { GuildSummaryLink } from "../components/model/guild/GuildSummaryLink";
import { GuildSummaries } from "../components/model/guild/GuildSummaries";

import { getGuildsURL } from "../utils/endpoints";
import { getHeaders } from "../utils/constants";

export default function IndexPage({ status, guilds }) {
  if (status) return <Error statusCode={status} />;

  return (
    <Layout>
      <Header />
      <GuildSummaryCard>
        <GuildSummaryHeader>Set global application commands</GuildSummaryHeader>
        <GuildSummaryLink href="/guilds" />
      </GuildSummaryCard>
      {guilds && <GuildSummaries guilds={guilds} />}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const headers = getHeaders();

  const guilds = await fetch(getGuildsURL(), {
    method: "GET",
    headers,
  });

  return {
    props: {
      guilds: guilds.status === 200 ? await guilds.json() : undefined,
    },
  };
};
