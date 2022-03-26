import {
  getNewCommands,
  getEditedCommands,
  getDeletedCommands,
} from "./commands";

export const send = (endpoint, newer, older, guildID) => {
  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      commands: {
        new: getNewCommands(newer, older),
        edited: getEditedCommands(newer, older),
        deleted: getDeletedCommands(newer, older),
      },
      guild_id: guildID,
    }),
  });
};
