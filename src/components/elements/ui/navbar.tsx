import { useNavigate } from "react-router-dom";
import NavIcon from "../../../../public/img/logo-2.png";
export const Navbar = () => {
  const nav = useNavigate();
  return (
    <>
      <nav className="bg-primary fixed flex justify-between items-center w-full max-w-[83rem] text-foreBackground px-12 m-4 rounded-full shadow drop-shadow-grayCustom">
        <button className="w-40" onClick={() => nav("/")}>
          <img src={NavIcon} alt="home" />
        </button>
        <button
          onClick={() => nav("/library")}
          className="text-2xl font-medium"
        >
          Library
        </button>
      </nav>
    </>
  );
};
