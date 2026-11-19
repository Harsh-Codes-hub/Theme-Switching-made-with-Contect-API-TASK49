import { useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    console.log("Theme updated:", theme);
    localStorage.setItem("theme", theme);
    return () => {
      console.log("Theme saved to: ", theme);
    };
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
