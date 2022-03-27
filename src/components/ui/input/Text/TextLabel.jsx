export function TextLabel({ children, id }) {
  return (
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {children}
    </label>
  );
}
