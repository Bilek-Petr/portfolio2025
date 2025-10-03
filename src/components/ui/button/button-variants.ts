import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'relative inline-flex items-center justify-center font-medium transition-colors overflow-hidden isolate group',
  {
    variants: {
      variant: {
        primary:
          'bg-black text-white after:absolute after:inset-0 after:bg-gradient-custom after:left-[72%] after:transition-all after:duration-400 after:-z-10 hover:after:left-0',
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

export type ButtonVariants = VariantProps<typeof buttonVariants>;
