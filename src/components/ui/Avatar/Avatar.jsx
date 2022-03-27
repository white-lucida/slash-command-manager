import { AvatarImage } from "./AvatarImage";
import { AvatarImageNotFound } from "./AvatarImageNotFount";

export function Avatar({ src, name, description }) {
  return (
    <div className="flex items-center space-x-4">
      {src ? <AvatarImage src={src} /> : <AvatarImageNotFound />}

      <div className="space-y-1 font-medium dark:text-white">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </div>
        <div>{name}</div>
      </div>
    </div>
  );
}
