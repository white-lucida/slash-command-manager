import { useRouter } from "next/router";

import { Header } from "../../components/nav/header";
import { Layout } from "../../components/nav/layout";

import { CommandsContainer } from "../../components/model/command/CommandsContainer";
import { UserInfo } from "../../components/model/user/UserInfo";

import { DefaultButton } from "../../components/ui/input/Button";

import { useApplicationCommands } from "../../hooks/state/use_commands";

import { send } from "../../utils/send";
import { getCommandsURL, getUserURL } from "../../utils/endpoints";
import { getHeaders } from "../../utils/constants";

export default function GlobalCommandPage({
  commands: commandsDefaultValue,
  user,
}) {
  const { commands, dispatch } = useApplicationCommands(commandsDefaultValue);
  const router = useRouter();

  const handleSubmit = () => {
    send("/api/send/global", commands, commandsDefaultValue);
  };

  return (
    <Layout>
      <Header>
        <DefaultButton onClick={() => router.push("/")}>
          Back to home
        </DefaultButton>
      </Header>

      <div className="flex justify-center gap-8 items-center">
        <UserInfo user={user} />
        <p className="dark:text-white text-center border-b-2 border-b-white">
          You are editing global application commands.
        </p>
      </div>

      <CommandsContainer
        commands={commands}
        dispatch={dispatch}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const headers = getHeaders();

  const commands = await fetch(getCommandsURL(), {
    method: "GET",
    headers,
  });

  const user = await fetch(getUserURL(), {
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
    },
  };
};
