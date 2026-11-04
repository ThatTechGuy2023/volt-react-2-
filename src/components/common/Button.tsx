import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
type P = { to?: string; variant?: 'primary' | 'ghost'; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({ to, variant = 'ghost', children, className = '', ...rest }: P) {
  const c = `inline-flex min-h-11 items-center justify-center gap-2 border px-6 text-sm font-medium transition-colors duration-200 ${variant === 'primary' ? 'border-ice bg-ice text-obsidian hover:bg-white' : 'border-current hover:border-ice hover:bg-ice hover:text-obsidian'} ${className}`;
  return to ? <Link to={to} className={c}>{children}</Link> : <button className={c} {...rest}>{children}</button>;
}
