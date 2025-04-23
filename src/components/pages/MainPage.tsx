import { InputField } from "../elements/ui/input";

export const MainPage = () => {
  return (
    <>
      <div className="border border-red-500 flex flex-col justify-center items-center h-screen">
        <h1 className="mb-8 text-4xl font-bold">Welcome to MiniLib</h1>
        <InputField
          placeholder={"Search your Skripsi or PKL's Report "}
          handleChange={function (): void {
            throw new Error("Function not implemented.");
          }}
          type={"text"}
        />
      </div>
    </>
  );
};
