import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ButtonContextProvider } from "./myButtonContet.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ButtonContextProvider>
      <App />
    </ButtonContextProvider>
  </StrictMode>
);
