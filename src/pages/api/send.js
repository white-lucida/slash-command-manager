import { getCommandsURL } from "../../utils/endpoint";
import { getEnv } from "../../utils/envs";

const removeID = (command) => {
  const { id, ...data } = command;
  return data;
};

const removeDescription = (command) => {
  const { description, ...data } = command;
  return data;
};

const removeOther = (command) => {
  const {
    application_id,
    version,
    default_member_permissions,
    guild_id,
    ...data
  } = command;
  return data;
};

export default async function send(req, res) {
  if (req.method !== "POST") {
    res.status(400).end();
    return;
  }
  const data = JSON.parse(req.body);
  console.log(data);
  const env = getEnv();
  const endpoint = getCommandsURL(data.guild_id ? data.guild_id : undefined);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
  };
  console.log(endpoint);

  const edit = async () => {
    console.log("edit start");
    console.log(data.commands.edited.length);

    const normalize = (command) =>
      command.type === 1 ? command : removeDescription(command);

    const body = [
      ...data.commands.new.map((command) => removeID(normalize(command))),
      ...data.commands.edited.map((command) => removeOther(normalize(command))),
    ];
    console.log(JSON.stringify(body));

    if (body.length !== 0)
      try {
        const r = await fetch(endpoint, {
          method: "PUT",
          body: JSON.stringify(body),
          headers,
        });
        console.log(r);
        for (const value of r.headers.entries()) {
          console.log(value);
        }
      } catch (e) {
        console.log(e);
      }
  };

  await edit();

  try {
    console.log("start");
    const result = await Promise.all([
      /*
      ...data.commands.new.map((command) =>
        fetch(endpoint, {
          method: "POST",
          body: JSON.stringify(
            command.type === 1
              ? removeID(command)
              : removeDescription(removeID(command))
          ),
          headers,
        })
      ),
      */
      ...data.commands.deleted.map((command) =>
        fetch(`${endpoint}/${command.id}`, {
          method: "DELETE",
          headers,
        })
      ),
    ]);
    console.log("end");
    result.forEach((r) => {
      console.log(r);
    });
  } catch (e) {
    console.log(e);
  }
}
