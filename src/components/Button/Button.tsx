import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <button
      className={`Button-btn-login ${className}`}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
