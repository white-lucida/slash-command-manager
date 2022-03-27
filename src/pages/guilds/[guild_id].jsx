import { useRouter } from "next/router";

import { Header } from "../../components/nav/header";
import { Layout } from "../../components/nav/layout";

import { UserInfo } from "../../components/model/user/UserInfo";
import { GuildInfo } from "../../components/model/guild/GuildInfo";
import { CommandsContainer } from "../../components/model/command/CommandsContainer";

import { DefaultButton } from "../../components/ui/input/Button";

import { useApplicationCommands } from "../../hooks/state/use_commands";

import { getCommandsURL, getGuildURL, getUserURL } from "../../utils/endpoints";
import { send } from "../../utils/send";
import { getHeaders } from "../../utils/constants";

export default function GuildCommandPage({
  commands: commandsDefaultValue,
  user,
  guild,
}) {
  const { commands, dispatch } = useApplicationCommands(commandsDefaultValue);
  const router = useRouter();

  const handleSubmit = () => {
    send(`/api/send/${guild.id}`, commands, commandsDefaultValue);
  };

  return (
    <Layout>
      <Header>
        <DefaultButton onClick={() => router.push("/")}>
          Back to home
        </DefaultButton>
      </Header>
      <div className="flex justify-center gap-8">
        <UserInfo user={user} />
        <GuildInfo guild={guild} />
      </div>
      <CommandsContainer
        commands={commands}
        dispatch={dispatch}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const headers = getHeaders();

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
      commands: await commands.json(),
      user: user.status === 200 ? await user.json() : undefined,
      guild: guild.status === 200 ? await guild.json() : undefined,
    },
  };
};
