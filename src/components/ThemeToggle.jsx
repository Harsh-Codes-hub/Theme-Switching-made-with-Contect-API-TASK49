import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return <button type="button">Toggle Theme</button>;
};

export default ThemeToggle;
