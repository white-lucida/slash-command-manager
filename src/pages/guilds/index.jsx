import "tailwindcss/tailwind.css";
import { getEnv } from "../../utils/envs";
import { getCommandsURL, getUserURL } from "../../utils/endpoint";
import { Header, Layout } from "../../components";
import { useCommands, useUser } from "../../hooks";
import { send } from "../../utils/send";
import { Avatar } from "../../components/application/avatar";
import { Form } from "../../components/form/form";
import { Button } from "../../components/input";
import { useRouter } from "next/router";

const GlobalCommandPage = ({ data }) => {
  const { commands, dispatch } = useCommands(data.commands);
  const user = useUser(data.user);
  const router = useRouter();

  const onSend = () => {
    send("/api/send/", commands, data.commands);
  };

  return (
    <Layout>
      <Header>
        <Button onClick={() => router.push("/")}>Back to home</Button>
      </Header>

      <div className="flex justify-center gap-8 items-center">
        {user && (
          <div>
            <Avatar src={user.avatar} name={user.name} description="User" />
          </div>
        )}
        <p className="dark:text-white text-center border-b-2 border-b-white">
          You are editing global application commands.
        </p>
      </div>
      <Form commands={commands} dispatch={dispatch} onSend={onSend} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const env = getEnv();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
  };

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
      data: {
        commands: await commands.json(),
        user: user.status === 200 ? await user.json() : undefined,
      },
    },
  };
};

export default GlobalCommandPage;
