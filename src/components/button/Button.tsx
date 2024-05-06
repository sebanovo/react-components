
// components/button/button.tsx
import React, { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};


const Button: React.FC<ButtonProps> = ({
  text,
  primary,
  disabled,
  size,
  onClick,
  ...props
}) => {
  return (
    <button
    {...props} 
    >
      {text}
    </button>
  );
};

export default Button;