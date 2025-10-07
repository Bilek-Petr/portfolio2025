import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'relative inline-flex gap-4 items-center justify-center font-medium transition-colors overflow-hidden isolate group',
  {
    variants: {
      variant: {
        primary: ['bg-black text-white'],
        secondary: 'bg-white text-black border-2 border-black',
        outline:
          'border-2 border-black bg-transparent hover:bg-black hover:text-white',
      },
      size: {
        sm: 'px-[1em] py-[0.5em] text-[0.875em]',
        md: 'pl-[1.5em] pr-[1.125em] py-[0.75em] text-[clamp(0.75em,2vw,1rem)]',
        lg: 'px-[2em] py-[1em] text-[1.125em]',
      },
      visibility: {
        visible: '',
        hidden: 'sr-only',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      visibility: 'visible',
    },
  }
);

export const iconStyles = {
  default: 'h-7 w-7',
  container: 'relative z-10 flex items-center justify-center ml-4',
};

export const contentStyles = {
  wrapper: 'flex items-center justify-between w-full',
  label: 'relative z-10 pr-4 md:pr-6',
};

export type ButtonVariants = VariantProps<typeof buttonVariants>;
