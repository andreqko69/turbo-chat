import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const spinnerVariants = cva(
  'inline-block animate-spin rounded-full border-solid border-white',
  {
    variants: {
      size: {
        default: 'h-4 w-4 border-3',
        6: 'h-6 w-6 border-4',
        8: 'h-8 w-8 border-5',
      },
    },
  },
);

const Spinner = ({
  size = 'default',
  className,
}: { className?: string } & VariantProps<typeof spinnerVariants>) => (
  <span
    className={cn(spinnerVariants({ size }), className, 'border-b-transparent')}
  />
);

export { Spinner };
