import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'h-9 w-9 text-[11px]',
  md: 'h-11 w-11 text-sm',
  lg: 'h-16 w-16 text-lg',
};

export default function Logo({ size = 'md', className }: LogoProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl bg-primary font-bold tracking-tight text-primary-foreground',
        sizeMap[size],
        className
      )}
    >
      MIHY
    </div>
  );
}
