import { IButton } from "../../../interfaces/button";

export const Button = ({ type, onClick, label }: IButton) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};
