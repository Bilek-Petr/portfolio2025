import { cva, type VariantProps } from 'class-variance-authority';

export const iconCircleVariants = cva(
  'rounded-full flex items-center justify-center transition-all duration-300',
  {
    variants: {
      variant: {
        light: 'bg-red-500 text-accent hover:bg-gray-300',
        lightBordered:
          'bg-light border border-gray-200 text-accent hover:border-gradient-middle hover:border-8 transition-all duration-300',
        dark: 'bg-accent text-white fill-white hover:bg-gray-100',
        medium: 'bg-gray-100/80',
      },
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-16 h-16',
      },
      interactive: {
        true: 'cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'md',
      interactive: false,
    },
  }
);

export const iconSizeVariants = cva('', {
  variants: {
    size: {
      sm: 'w-6 h-6',
      md: 'w-7 h-7',
      lg: 'w-10 h-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type IconCircleVariants = VariantProps<typeof iconCircleVariants>;
