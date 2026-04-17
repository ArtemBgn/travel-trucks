'use client'; //нужно ли?
import { ReactElement } from 'react';
import css from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactElement;
  className?: string;
}

function Button({ text, icon, className, ...props }: ButtonProps) {
  return (
    <button className={`${css.button} ${className}`} {...props}>
      {icon && icon}
      {text}
    </button>
  );
}

export default Button;
