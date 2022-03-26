import "tailwindcss/tailwind.css";
import { getEnv } from "../../utils/envs";
import { getCommandsURL, getGuildURL, getUserURL } from "../../utils/endpoint";
import { Header, Layout } from "../../components";
import { useCommands, useUser, useGuild } from "../../hooks";
import { send } from "../../utils/send";
import { Avatar } from "../../components/application/avatar";
import { Form } from "../../components/form/form";
import { useRouter } from "next/dist/client/router";
import { Button } from "../../components/input";

const GuildCommandPage = ({ data }) => {
  const { commands, dispatch } = useCommands(data.commands);
  const user = useUser(data.user);
  const guild = useGuild(data.guild);
  const router = useRouter();

  const onSend = () => {
    send(`/api/send/`, commands, data.commands, guild.id);
  };

  return (
    <Layout>
      <Header>
        <Button onClick={() => router.push("/")}>Back to home</Button>
      </Header>
      <div className="flex justify-center gap-8">
        {user && (
          <div>
            <Avatar src={user.avatar} name={user.name} description="User" />
          </div>
        )}
        {guild && (
          <div>
            <Avatar src={guild.icon} name={guild.name} description="Server" />
          </div>
        )}
      </div>
      <Form commands={commands} dispatch={dispatch} onSend={onSend} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const env = getEnv();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
  };

  const commands = await fetch(getCommandsURL(context.query.guild_id), {
    method: "GET",
    headers,
  });

  const user = await fetch(getUserURL(), {
    method: "GET",
    headers,
  });

  const guild = await fetch(getGuildURL(context.query.guild_id), {
    method: "GET",
    headers,
  });

  if (commands.status !== 200)
    return {
      props: {
        status: commands.status,
      },
    };

  return {
    props: {
      data: {
        commands: await commands.json(),
        user: user.status === 200 ? await user.json() : undefined,
        guild: guild.status === 200 ? await guild.json() : undefined,
      },
    },
  };
};

export default GuildCommandPage;
