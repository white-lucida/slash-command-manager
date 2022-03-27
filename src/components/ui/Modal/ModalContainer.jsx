import clsx from "clsx";

export function ModalContainer({ isOpened, children }) {
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={clsx(
        "flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center",
        !isOpened && "hidden",
        "bg-black bg-opacity-30"
      )}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
