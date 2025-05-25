import { useContext } from "react";
import { MyButtonContext } from "./Context";

export function Button() {
  const { btn, setBtn } = useContext(MyButtonContext);
  console.log(btn);
  return (
    <div
      className={`${
        btn ? "bg-black" : "bg-white"
      } h-screen flex justify-center items-center`}
    >
      <label
        htmlFor="check"
        className={`w-20 h-10 ${
          btn ? "bg-white" : "bg-black"
        }  rounded-full relative`}
      >
        <input
          onClick={() => setBtn(!btn)}
          type="checkbox"
          id="check"
          className="sr-only peer"
        />
        <span className="h-4/5 w-2/5 top-1 left-1 rounded-full bg-black absolute peer-checked:bg-white peer-checked:left-11 transition-all duration-700"></span>
      </label>
    </div>
  );
}
