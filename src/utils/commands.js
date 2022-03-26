export const getNewCommands = (commands, defaultValue) =>
  commands.filter((command) => {
    const exists =
      defaultValue.find((oldCommand) => oldCommand.id === command.id) !==
      undefined;
    // 編集前、そのコマンドが存在していたか
    return !exists;
    // 編集前に存在していない -> 編集時に追加された
  });

export const getDeletedCommands = (commands, defaultValue) =>
  defaultValue.filter((command) => {
    const exists =
      commands.find((newCommand) => newCommand.id === command.id) !== undefined;
    // 編集後、そのコマンドが現存しているか
    return !exists;
    // 編集後に存在していない -> 編集時に削除された
  });

export const getEditedCommands = (commands, defaultValue) => {
  const newCommands = getNewCommands(commands, defaultValue);
  const deletedCommands = getDeletedCommands(commands, defaultValue);

  return commands.filter(
    (command) =>
      !newCommands.includes(command) && !deletedCommands.includes(command)
  );
  // 新規作成されておらず、削除されてもいない -> 編集されただけ
};
