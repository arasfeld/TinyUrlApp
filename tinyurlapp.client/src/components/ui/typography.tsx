import * as React from 'react';

import { cn } from '@/lib/utils';

export function TypographyH1({
  children,
  className,
  ...rest
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

export function TypographyP({
  children,
  className,
  ...rest
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...rest}
    >
      {children}
    </p>
  );
}
