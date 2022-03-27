import { DefaultButton } from "../../../ui/input/Button";
import { CommandCards } from "../CommandCards";

export function CommandsContainer({ commands, dispatch, onSubmit }) {
  return (
    <section>
      <main className="flex flex-col gap-4">
        <CommandCards commands={commands} dispatch={dispatch} />
        <div className="w-full">
          <div className="w-30  flex gap-8 justify-center">
            <DefaultButton onClick={() => dispatch({ type: "addCommand" })}>
              Add Command
            </DefaultButton>
            <DefaultButton onClick={() => onSubmit()}>
              {" "}
              Send Request{" "}
            </DefaultButton>
          </div>
        </div>
      </main>
    </section>
  );
}
