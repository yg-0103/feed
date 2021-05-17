import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

function Button({ children, className }: ButtonProps) {
  return (
    <button className={`Button-btn-login ${className}`} type="button">
      {children}
    </button>
  );
}

export default Button;
