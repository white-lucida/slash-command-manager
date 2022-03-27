export function RadioOption({ id, name, children, value, checked }) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={`${name}-option-${id}`}
        type="radio"
        name={name}
        value={value}
        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
        defaultChecked={checked === value}
      />
      <label
        htmlFor={`${name}-option-${id}`}
        className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {children}
      </label>
    </div>
  );
}
