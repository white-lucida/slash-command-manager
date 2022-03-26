import { useReducer } from "react";

const setCommand = (state, data, commandIndex) => {
  return state.map((command, i) => (i === commandIndex ? data : command));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addCommand":
      return [...state, { name: "", description: "", type: 1, id: "" }];
  }

  if (!("commandIndex" in action.payload)) {
    switch (action.type) {
      default:
        return state;
    }
  }
  const { commandIndex } = action.payload;
  const command = state[commandIndex];
  switch (action.type) {
    case "changeCommandType":
      return setCommand(
        state,
        { ...command, type: action.payload.type },
        commandIndex
      );
    case "changeCommandName":
      return setCommand(
        state,
        { ...command, name: action.payload.name },
        commandIndex
      );
    case "changeCommandDescription":
      return setCommand(
        state,
        { ...command, description: action.payload.description },
        commandIndex
      );
    case "changeCommandID":
      return setCommand(
        state,
        { ...command, id: action.payload.id },
        commandIndex
      );
    case "deleteCommand":
      return state.filter((_, i) => i !== action.payload.commandIndex);
    default:
      return state;
  }
};

export const useCommands = (defaultValue) => {
  const [state, dispatch] = useReducer(reducer, defaultValue ?? []);
  return {
    commands: state,
    dispatch,
  };
};
