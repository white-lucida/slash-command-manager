import { Button } from "../input";
import { Command } from "./command";

export const Form = ({ commands, dispatch, onSend }) => (
  <section>
    <main className="flex flex-col gap-4">
      <ul className="flex gap-4 m-0 list-none flex-wrap grow-0 shrink-0">
        {commands.map((command, i) => (
          <li key={i} className="w-72">
            <Command commandIndex={i} command={command} dispatch={dispatch} />
          </li>
        ))}
      </ul>
      <div className="w-full">
        <div className="w-30  flex gap-8 justify-center">
          <Button onClick={() => dispatch({ type: "addCommand" })}>
            Add Command
          </Button>
          <Button onClick={() => onSend()}> Send Request </Button>
        </div>
      </div>
    </main>
  </section>
);
