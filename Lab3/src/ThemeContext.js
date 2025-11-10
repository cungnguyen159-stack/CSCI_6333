import { createContext } from "react";

// optional default shape
export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});