import { createContext, useState } from "react";

export const ButtonContext = createContext();
export function ButtonContextProvider({ children }) {
  const [theme, setTheme] = useState("green");
  function handleTheme() {
    if (theme == "green") {
      setTheme("red");
    } else {
      setTheme("green");
    }
  }
  return (
    <ButtonContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ButtonContext.Provider>
  );
}
