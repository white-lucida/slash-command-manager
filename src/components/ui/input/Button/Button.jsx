export function Button({ onClick, children, className }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
