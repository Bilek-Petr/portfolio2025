import { NavigationSocialIcon } from '@/types';
import { IconCircle } from '../ui/iconCircle/IconCircle';

export const NavigationSocial = ({
  icons,
}: {
  icons: NavigationSocialIcon[];
}) => {
  return (
    <div className="mt-auto">
      <ul className="flex flex-col gap-3">
        {icons.map((icon, index) => (
          <li key={index}>
            <IconCircle
              icon={icon.src}
              href={icon.url}
              alt={icon.alt}
              size="md"
              variant="lightBordered"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
