import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  buttonVariants,
  type ButtonVariants,
  iconStyles,
  contentStyles,
} from './button-variants';

export interface ButtonProps extends ButtonVariants {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  srOnly?: boolean;
  className?: string;
}

export default function Button({
  label,
  href,
  onClick,
  variant = 'primary',
  size,
  visibility,
  icon,
  srOnly = false,
  className = '',
}: ButtonProps) {
  const combinedClasses = `${buttonVariants({ variant, size, visibility })} ${className}`;

  const displayIcon =
    variant === 'primary' && !icon ? (
      <ArrowUpRight className={iconStyles.default} />
    ) : (
      icon
    );

  const content = (
    <>
      <div className={contentStyles.wrapper}>
        <span className={srOnly ? 'sr-only' : contentStyles.label}>
          {label}
        </span>
        {displayIcon && (
          <span className={iconStyles.container}>{displayIcon}</span>
        )}
      </div>
      {variant === 'primary' && (
        <div className="absolute inset-y-0 right-0 transition-all gradient-bg duration-400 -z-10 w-14 bg-gradient-custom group-hover:w-full md:w-16" />
      )}
    </>
  );

  if (href) {
    return (
      <div className="inline-block">
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      </div>
    );
  }

  return (
    <div className="inline-block">
      <button className={combinedClasses} onClick={onClick}>
        {content}
      </button>
    </div>
  );
}
