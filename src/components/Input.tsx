import React, { InputHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input: React.FC<IProps> = ({ label, error, ...props }) => {
  return (
    <label className="flex flex-col gap-1">
      <span
        className="text-sm text-white"
        style={{ textShadow: "2px 2px rgba(0, 0, 0, .6)" }}
      >
        {label} <span className="text-base font-extrabold text-red-600">*</span>
      </span>
      <input
        className="border border-[#d3d3d3] rounded-lg bg-transparent outline-none p-2 text-white"
        style={{ textShadow: "2px 2px rgba(0, 0, 0, .6)" }}
        {...props}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </label>
  );
};

export default Input;
