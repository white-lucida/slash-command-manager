export function Header({ children }) {
  return (
    <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
      <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none dark:text-white">
        Discord{" "}
        <span className="inline-block text-purple-400">
          Slash Command Manager
        </span>
      </h2>
      {children}
    </div>
  );
}
