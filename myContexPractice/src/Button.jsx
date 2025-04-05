import { useContext } from "react";
import { ButtonContext } from "./myButtonContet";

export default function Button() {
  const { handleTheme } = useContext(ButtonContext);
  return <button onClick={handleTheme}>click Me</button>;
}
