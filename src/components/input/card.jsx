export const Card = ({ children }) => (
  <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
      {children}
    </form>
  </div>
);
