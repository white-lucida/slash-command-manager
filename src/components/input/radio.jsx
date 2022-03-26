export const Radio = ({ name, options, onChange, checked }) => (
  <fieldset onChange={(e) => onChange(e.target.value)}>
    <legend className="sr-only">Countries</legend>
    {options.map((option, i) => (
      <div key={i} className="flex items-center mb-4">
        <input
          id={`${name}-option-${i}`}
          type="radio"
          name={name}
          value={option.value}
          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          defaultChecked={checked !== undefined && checked === option.value}
        />
        <label
          htmlFor={`${name}-option-${i}`}
          className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {option.label}
        </label>
      </div>
    ))}
  </fieldset>
);
