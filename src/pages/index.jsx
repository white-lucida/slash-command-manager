import { Header } from "../components/header";
import "tailwindcss/tailwind.css";
import { Layout } from "../components/layout";
import { getEnv } from "../utils/envs";
import Error from "next/error";
import { getGuildsURL } from "../utils/endpoint";

import { GuildLinks } from "../components/application/guild_links";
import { useGuilds } from "../hooks";
import { GuildLink } from "../components/application";

const Index = ({ status, data }) => {
  if (status) return <Error statusCode={error} />;
  const guilds = useGuilds(data.guilds);

  return (
    <Layout>
      <Header />
      <GuildLink summary="Set Global Application Command" />
      {guilds && <GuildLinks guilds={guilds} />}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const env = getEnv();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
  };

  const guilds = await fetch(getGuildsURL(), {
    method: "GET",
    headers,
  });

  return {
    props: {
      data: {
        guilds: guilds.status === 200 ? await guilds.json() : undefined,
      },
    },
  };
};

export default Index;
