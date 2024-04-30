import React, { ButtonHTMLAttributes } from "react";

type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const Button: React.FC<IProps> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};

export default Button;
