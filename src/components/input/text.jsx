const TextParent = ({ children, label, id }) => (
  <div className="mb-6">
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {label ?? ""}
    </label>
    {children}
  </div>
);

export const DisabledText = ({ id, value, label }) => (
  <TextParent label={label} id={id}>
    <input
      type="text"
      id={id}
      className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={value}
      disabled
      readOnly
      required
    />
  </TextParent>
);
export const Text = ({ id, onChange, value, label }) => (
  <TextParent label={label} id={id}>
    <input
      type="text"
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={(e) => onChange(e.target.value)}
      value={value ?? ""}
      required
    />
  </TextParent>
);
