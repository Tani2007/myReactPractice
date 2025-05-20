import { createContext, useState } from "react";

export const BtnContext = createContext();
export default function BtnContextProvider({ children }) {
  const [data, setData] = useState(false);
  function handleOnClick() {
    setData(!data);
  }
  return (
    <BtnContext.Provider value={{ handleOnClick, data }}>
      {children}
    </BtnContext.Provider>
  );
}
