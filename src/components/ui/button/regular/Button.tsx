import React from 'react';
import Link from 'next/link';
import { buttonVariants, type ButtonVariants } from './button-variants';
import ButtonContent from './ButtonContent';

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
  iconPosition = 'right',
  srOnly = false,
  className = '',
}: ButtonProps) {
  const combinedClasses = `${buttonVariants({ variant, size, visibility })} ${className}`;
  const contentProps = { label, icon, iconPosition, variant, srOnly };

  return href ? (
    <Link href={href} className={combinedClasses}>
      <ButtonContent {...contentProps} />
    </Link>
  ) : (
    <button className={combinedClasses} onClick={onClick}>
      <ButtonContent {...contentProps} />
    </button>
  );
}
