import { useContext } from "react";
import { BtnContext } from "./myButtonContet";

export default function Button() {
  const { handleOnClick, data } = useContext(BtnContext);
  return (
    <div>
      <button onClick={handleOnClick}>Click me</button>
      {data ? (
        <h1>Hey there please click the button</h1>
      ) : (
        <p>April fool banaya</p>
      )}
    </div>
  );
}
