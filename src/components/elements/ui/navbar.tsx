import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const nav = useNavigate();
  return (
    <>
      <nav className="bg-primary fixed flex justify-between items-center w-full text-foreBackground p-4">
        <button className="text-4xl font-bold" onClick={() => nav("/")}>
          MiniLib
        </button>
        <button onClick={() => nav("/library")}>Library</button>
      </nav>
    </>
  );
};
