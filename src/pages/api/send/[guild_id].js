import { getHeaders } from "../../../utils/constants";
import { getCommandsURL } from "../../../utils/endpoints";

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
    res
      .status(400)
      .send({ error: "the send API doesn't support POST method." });
    return;
  }

  const guildID = req.query.guild_id;
  const data = JSON.parse(req.body);
  const endpoint = getCommandsURL(guildID !== "global" ? guildID : undefined);
  const headers = getHeaders();

  const result = await Promise.all([
    async () => {
      const normalize = (command) =>
        command.type === 1 ? command : removeDescription(command);

      const body = data.commands.edited.map((command) =>
        removeOther(normalize(command))
      );
      if (body.length === 0) return;
      await fetch(endpoint, {
        method: "PUT",
        body: JSON.stringify(body),
        headers,
      });
    },
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
    ...data.commands.deleted.map((command) =>
      fetch(`${endpoint}/${command.id}`, {
        method: "DELETE",
        headers,
      })
    ),
  ]);
  result.forEach((r) => {
    console.log(r);
  });
}
