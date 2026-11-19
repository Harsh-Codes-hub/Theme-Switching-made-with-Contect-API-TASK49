import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button
     type="button"
     className="bg-(--background) h-full w-full rounded-2xl text-(--text) text-9xl hover:text-(--surface) hover:bg-(--text) hover:-translate-y-1 active:scale-99 active:translate-y-2 active:scale-y-85 active:scale-x-95 smooth"
     onClick={toggleTheme}
     >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
