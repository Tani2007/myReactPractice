import { useState } from "react";

const Card = ({ setCart, id, name, image, price }) => {
  function handleOnClick(name, price) {
    setCart((prev) => {
      const filteredArr = prev.filter((curElem) => {
        return curElem.name != name;
      });
      console.log("filter");
      console.log(filteredArr);
      console.log("filterClose");
      const updatedCart = [...prev, { name, price }];
      return updatedCart;
    });
  }

  return (
    <div
      id={id}
      className="bg-white h-50 w-35 flex flex-col justify-center items-center rounded-2xl "
    >
      <div>
        <img src={image} className="rounded-2xl h-25 w-25" alt="" />
      </div>
      <div className="text-center font-bold">{name}</div>
      <div className="text-center font-bold text-black">{price}</div>
      <button
        className=" h-10 w-full bg-green-300 text-gray-950 font-bold px-2 py-1 rounded-xl"
        onClick={() => handleOnClick(name, price)}
      >
        Add to cart
      </button>
    </div>
  );
};
export default Card;
