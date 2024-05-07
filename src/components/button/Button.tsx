
import React, { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  size,
  onClick,
  ...props
}) => {
  return (
    <button
    className={`bg-green-600 dark:bg-pink-700 text-white p-2 rounded-lg hover:opacity-90 ${className}`}
    {...props} 
    >
      {text}
    </button>
  );
};

export default Button;