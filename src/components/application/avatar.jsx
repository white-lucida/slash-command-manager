export const Avatar = ({ src, name, description }) => (
  <div className="flex items-center space-x-4">
    {src ? (
      <img className="w-10 h-10 rounded-full" src={src} alt="" />
    ) : (
      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    )}

    <div className="space-y-1 font-medium dark:text-white">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {description}
      </div>
      <div>{name}</div>
    </div>
  </div>
);
