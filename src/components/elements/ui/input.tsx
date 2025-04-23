import { IInput } from "../../../interfaces/input";

export const InputField = ({
  type,
  placeholder,
  handleChange,
  value,
}: IInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      className="w-full max-w-md px-4 py-3 rounded-2xl border border-grayCustom shadow-sm focus:outline-none focus:ring-2 focus:ring-foreBackground focus:border-foreBackground transition duration-200 bg-whiteCustom text-black placeholder-grayCustom"
    />
  );
};
