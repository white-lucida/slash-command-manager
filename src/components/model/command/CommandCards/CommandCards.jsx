import { CommandForm } from "../CommandForm";

export function CommandCards({ commands, dispatch }) {
  return (
    <ul className="flex gap-4 m-0 list-none flex-wrap grow-0 shrink-0">
      {commands.map((command, i) => (
        <li key={command.id} className="w-72">
          <CommandForm commandIndex={i} command={command} dispatch={dispatch} />
        </li>
      ))}
    </ul>
  );
}
