import { InputField } from "../elements/ui/input";
import Icon from "../../../public/img/logo-1.png";
import { AboutSection } from "../layout/about-sect";
export const MainPage = () => {
  return (
    <>
      <main className=" flex flex-col justify-center items-center h-full bg-cover bg-center bg-[url('/img/main-bg.jpg')]">
        <section className="flex flex-col items-center pt-[12rem] pb-40 w-3/4">
          <div className=" bg-background flex items-center mb-8 rounded-2xl shadow drop-shadow-grayCustom">
            <img src={Icon} alt="MiniLib" className="w-40" />
            <h1 className="flex flex-col text-5xl text-primary font-bold pr-4">
              Welcome to<span>MiniLib</span>
            </h1>
          </div>
          <InputField
            scale="scale-110"
            placeholder={"Search your Skripsi or PKL's Report "}
            handleChange={function (): void {
              throw new Error("Function not implemented.");
            }}
            type={"text"}
          />
        </section>
        <AboutSection />
      </main>
    </>
  );
};
