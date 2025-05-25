import { createContext, use, useEffect, useState } from "react";

export const MyButtonContext = createContext();
export function MyButtonContextProvider({ children }) {
  const [apiState, setApiState] = useState([]);

  const myHeaders = new Headers();

  myHeaders.append(
    "x-apihub-key",
    "Vx5aySZeq1Myg0IcCfmiZERDavU81qpXpaL-ogYx-XcOrJ00MV"
  );
  myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "c87f1a11-e835-4a06-bc95-c6fc6a937f22");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-anime-shows",
      requestOptions
    )
      .then((result) => result.json())
      .then((apiResult) => setApiState(apiResult))
      .catch((error) => console.error(error));
  }, []);
  return (
    <MyButtonContext.Provider value={apiState}>
      {children}
    </MyButtonContext.Provider>
  );
}
