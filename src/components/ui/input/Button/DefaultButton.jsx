import { Button } from "./Button";

export function DefaultButton({ children, onClick }) {
  return (
    <Button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  grow-0 shrink-0"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
