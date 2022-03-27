import { ModalCloseButton } from "./ModalCloseButton";
import { ModalContainer } from "./ModalContainer";

export function Modal({ isOpened, close, children }) {
  return (
    <ModalContainer isOpened={isOpened}>
      <div className="flex justify-end p-2">
        <ModalCloseButton onClick={close} />
      </div>
      {children}
    </ModalContainer>
  );
}
