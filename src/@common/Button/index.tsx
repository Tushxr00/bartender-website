import React, { FC } from "react";

interface IButton {
  onClickAction: () => void;
  text: string;
  className?: string;
}
const Button: FC<IButton> = ({ onClickAction, text, className }) => {
  return (
    <button
      className={`${className} bg-black text-white text-opacity-70 rounded-2xl py-1 px-[2rem]  hover:text-opacity-90 transition duration-300 `}
      onClick={() => {
        onClickAction();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
