export function DisabledTextBody({ id, value }) {
  return (
    <input
      type="text"
      id={id}
      className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={value ?? ""}
      readOnly
      disabled
      required
    />
  );
}
