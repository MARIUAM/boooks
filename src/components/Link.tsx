import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a href={href} className={`hover:text-sky-100 transition-colors duration-200 ${className}`}>
      {children}
    </a>
  );
}