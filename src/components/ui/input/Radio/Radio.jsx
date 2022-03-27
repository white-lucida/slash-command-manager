import { RadioOption } from "./RadioOption";

export function Radio({ name, children, options, onChange, checked }) {
  return (
    <fieldset onChange={(e) => onChange(e.target.value)}>
      {children}
      {options.map((option) => (
        <RadioOption
          key={option.value}
          id={option.value}
          name={name}
          value={option.value}
          checked={checked}
        >
          {option.label}
        </RadioOption>
      ))}
    </fieldset>
  );
}
