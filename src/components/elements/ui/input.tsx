import { IInput } from "../../../interfaces/input";

export const InputField = ({
  type,
  placeholder,
  handleChange,
  value,
  scale,
}: IInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      className={`hover:${scale} w-full max-w-xl px-4 py-3 rounded-2xl border border-grayCustom shadow-sm focus:outline-none focus:ring-2 focus:ring-foreBackground focus:border-foreBackground transition duration-200 bg-whiteCustom text-black placeholder-grayCustom`}
    />
  );
};
