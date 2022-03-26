import { useState } from "react";

import {
  DisabledText,
  Text,
  Radio,
  Card,
  Button,
  ButtonPrimary,
} from "../input";
import { Modal } from "../modal";

export const Command = ({ commandIndex, command, dispatch }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const Description = command.type === 1 ? Text : DisabledText;
  return (
    <section>
      <Card>
        <DisabledText
          id={`id-${commandIndex}`}
          label="id"
          value={command.id}
          onChange={() => {}}
        />
        <Text
          id={`name-${commandIndex}`}
          label="name"
          value={command.name}
          onChange={(name) => {
            console.log(commandIndex);
            dispatch({
              type: "changeCommandName",
              payload: { commandIndex, name },
            });
          }}
        />
        <Description
          id={`description-${commandIndex}`}
          label="description"
          value={command.description}
          onChange={(description) =>
            dispatch({
              type: "changeCommandDescription",
              payload: { commandIndex, description },
            })
          }
        />
        <Radio
          name={`type-${commandIndex}`}
          options={[
            {
              label: "CHAT_INPUT",
              value: 1,
            },
            {
              label: "USER",
              value: 2,
            },
            {
              label: "MESSAGE",
              value: 3,
            },
          ]}
          onChange={(type) =>
            dispatch({
              type: "changeCommandType",
              payload: { commandIndex, type: Number(type) },
            })
          }
          checked={command.type}
        />
        <ButtonPrimary
          onClick={() => {
            setIsModalOpened(!isModalOpened);
          }}
        >
          Settings
        </ButtonPrimary>
      </Card>
      <Modal isEnabled={isModalOpened} onClose={() => setIsModalOpened(false)}>
        <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Settings
          </h3>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={`default-permission-${commandIndex}`}
                aria-describedby={`default-permission-${commandIndex}`}
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor={`default-permission-${commandIndex}`}
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                Default Permission
              </label>
            </div>
          </div>

          <Button
            onClick={() => {
              setIsModalOpened(false);
              dispatch({ type: "deleteCommand", payload: { commandIndex } });
            }}
          >
            Delete Command
          </Button>
        </div>
      </Modal>
    </section>
  );
};
