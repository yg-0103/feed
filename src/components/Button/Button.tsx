import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="Button-btn-login" type="button">
      {children}
    </button>
  );
}

export default Button;
