import { createContext, useState } from "react";

export const YoutubeContext = createContext();
export const YoutubeContextProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  function handleSidebar() {
    setSideBarOpen(!sideBarOpen);
  }
  return (
    <YoutubeContext.Provider value={{ sideBarOpen, handleSidebar }}>
      {children}
    </YoutubeContext.Provider>
  );
};
