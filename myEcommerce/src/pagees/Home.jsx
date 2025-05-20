import { useRef, useState } from "react";
import Categories from "../Category";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { food_items } from "../food";
import Modal from "../components/Modal";

const Home = ({ setCart, ref, onCartClick, cart }) => {
  return (
    <div className="w-full h-full bg-neutral-500 ">
      <Nav onCartClick={onCartClick} cart={cart} />

      <div className="flex justify-center items-center w-full  mt-5">
        {Categories.map((item) => {
          return (
            <div className="h-30 w-30 bg-gray-200 mx-2 flex flex-col justify-center items-center rounded-2xl">
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="flex pt-4 flex-wrap justify-center gap-10  relative">
        {food_items.map((item) => {
          return (
            <Card
              setCart={setCart}
              id={item.id}
              name={item.food_name}
              image={item.food_image}
              price={`₹${item.price}`}
            />
          );
        })}
        <Modal ref={ref} cart={cart} />
      </div>
    </div>
  );
};
export default Home;
