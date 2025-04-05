import { useContext } from "react";
import Button from "./Button";
import { ButtonContext } from "./myButtonContet";

export default function App() {
  const { theme } = useContext(ButtonContext);
  console.log(theme);
  return (
    <div
      style={{
        color: `black`,
        width: "100vw",
        height: "100vh",
        backgroundColor: `${theme}`,
      }}
    >
      <h1>App Component</h1>
      <Button />
    </div>
  );
}
