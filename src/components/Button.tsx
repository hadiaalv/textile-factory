import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export default function Button({ children, variant = 'primary', className = '', ...props }: Props) {
  const base = 'btn-primary';
  const ghost = 'btn-ghost';
  return (
    <button className={`${variant === 'primary' ? base : ghost} ${className}`} {...props}>
      {children}
    </button>
  );
}
