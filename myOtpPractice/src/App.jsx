import { useEffect, useRef, useState } from "react";

const OTP_DIGITS_COUNT = 5;
export default function App() {
  //otp input only numbers are allowed
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  const refArr = useRef([]);
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  function handleOnChange(value, index) {
    if (isNaN(value)) {
      return;
    }
    const newArr = [...inputArr];
    newArr[index] = value.at(-1);
    setInputArr(newArr);
    refArr.current[index + 1]?.focus();
  }
  return (
    <div className="grid place-items-center w-full h-screen bg-stone-200">
      <h1 className="font-bold text-4xl ">Validate OTP</h1>
      <div>
        {inputArr.map((curData, index) => {
          return (
            <input
              key={index}
              type="text"
              className="border-2 border-stone rounded-sm w-15 h-15 text-3xl text-center bg-stone-400 mx-1 focus:border-4 focus:border-stone-900  focus:bg-stone-100"
              value={inputArr[index]}
              ref={(input) => (refArr.current[index] = input)}
              onChange={(e) => handleOnChange(e.target.value, index)}
            />
          );
        })}
      </div>
    </div>
  );
}
