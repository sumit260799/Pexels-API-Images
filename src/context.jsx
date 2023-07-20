import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setisDarkTheme] = useState(getStorageTheme());
  const [searchTerm, setSearchTerm] = useState("life-style");
  const ThemeToggle = () => {
    if (isDarkTheme === "light-theme") {
      setisDarkTheme("dark-theme");
    } else {
      setisDarkTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = isDarkTheme;
    localStorage.setItem("theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContext.Provider
      value={{ isDarkTheme, ThemeToggle, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);
export default useGlobalContext;
