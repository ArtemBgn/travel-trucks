'use client'; //нужно ли?
import css from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

function Button({ text, className, ...props }: ButtonProps) {
  return (
    <button className={`${css.button} ${className}`} {...props}>
      {text}
    </button>
  );
}

export default Button;
