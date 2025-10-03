import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ButtonVariants } from './button-variants';

interface ButtonContentProps {
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: ButtonVariants['variant'];
  srOnly?: boolean;
}

export default function ButtonContent({
  label,
  icon,
  iconPosition = 'right',
  variant = 'primary',
  srOnly = false,
}: ButtonContentProps) {
  const displayIcon =
    variant === 'primary' && !icon ? (
      <ArrowUpRight className="w-5 h-5 sm:h-7 sm:w-7" />
    ) : (
      icon
    );

  const iconElement = displayIcon && (
    <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
      {displayIcon}
    </span>
  );

  return (
    <span className="inline-flex items-center gap-6">
      {iconPosition === 'left' && iconElement}
      <span className={srOnly ? 'sr-only' : ''}>{label}</span>
      {iconPosition === 'right' && iconElement}
    </span>
  );
}
