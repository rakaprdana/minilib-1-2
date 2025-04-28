import { InputField } from "../elements/ui/input";
import Icon from "../../../public/img/logo-1.png";
export const MainPage = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-[url('/img/bg-2.jpg')]">
        <div className="bg-background flex items-center mb-8 rounded-2xl hover:scale-105 transition-transform duration-700 shadow drop-shadow-grayCustom">
          <img src={Icon} alt="MiniLib" className="w-40" />
          <h1 className="flex flex-col text-5xl text-primary font-bold pr-4">
            Welcome to<span>MiniLib</span>
          </h1>
        </div>
        <InputField
          placeholder={"Search your Skripsi or PKL's Report "}
          handleChange={function (): void {
            throw new Error("Function not implemented.");
          }}
          type={"text"}
        />
      </main>
    </>
  );
};
