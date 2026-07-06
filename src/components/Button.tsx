import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export default function Button({ children, variant = 'primary', className = '', ...props }: Props) {
  const base = 'btn-primary';
  const ghost = 'inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-primary bg-white/30';
  return (
    <button className={`${variant === 'primary' ? base : ghost} ${className}`} {...props}>
      {children}
    </button>
  );
}
