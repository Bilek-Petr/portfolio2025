import React from 'react';
import Image from 'next/image';
import {
  iconCircleVariants,
  iconSizeVariants,
  type IconCircleVariants,
} from './iconCircle-variants';
import { cn } from '@/lib/utils';
interface IconCircleProps extends IconCircleVariants {
  icon: string;
  href?: string;
  onClick?: () => void;
  alt?: string;
}
export const IconCircle: React.FC<IconCircleProps> = ({
  icon,
  variant,
  size,
  href,
  onClick,
  alt = `${icon} icon`,
}) => {
  const isInteractive = Boolean(href || onClick);
  const content = (
    <div
      className={cn(
        iconCircleVariants({ variant, size, interactive: isInteractive })
      )}
      onClick={onClick}
    >
      <Image
        src={icon}
        alt={alt}
        width={20}
        height={20}
        className={cn(iconSizeVariants({ size }))}
      />
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content}
      </a>
    );
  }
  return content;
};
