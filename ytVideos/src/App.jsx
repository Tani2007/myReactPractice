import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState({
    productSelected: [],
    newProductArr: [],
    numberOfProducts: {},
    totalAmount: [],
  });
  function onAddProducts(productName) {
    setCart((prev) => {
      return {
        ...prev,
        productSelected: [...prev.productSelected, productName],
      };
    });
  }
  console.log(cart.productSelected);
  function handleCartClick() {
    let newObj = {};
    for (let keys of cart.productSelected) {
      console.log(newObj[keys]);
      newObj[keys] = (newObj[keys] || 0) + 1;
    }

    setCart((prev) => {
      return {
        ...prev,
        numberOfProducts: newObj,
      };
    });
  }
  console.log(cart.numberOfProducts);
  return (
    <div>
      <h1>Ekart Flipkart</h1>
      <div className="flex flex-col gap-3 bg-amber-300 p-4 justify-center items-center h-screen">
        <button
          name="shoes"
          onClick={(e) => onAddProducts(e.target.name)}
          className="bg-blue-500 w-20 rounded-2xl px-2 py-1.5"
        >
          Shoes
        </button>
        <button
          className="bg-blue-500 w-20 rounded-2xl px-2 py-1.5 "
          name="shirts"
          onClick={(e) => onAddProducts(e.target.name)}
        >
          Shirts
        </button>
        <button
          className="bg-blue-500 w-20 rounded-2xl px-2 py-1.5"
          name="pants"
          onClick={(e) => onAddProducts(e.target.name)}
        >
          Pants
        </button>
        <button
          className="bg-blue-500 w-20 rounded-2xl px-2 py-1.5"
          name="watches"
          onClick={(e) => onAddProducts(e.target.name)}
        >
          watches
        </button>
        <button
          onClick={handleCartClick}
          className="bg-blue-500 w-20 rounded-2xl px-2 py-1.5"
        >
          CART
        </button>
        <div>Shoes:{cart.numberOfProducts.shoes}</div>
        <div>Shirts:{cart.numberOfProducts.shirts}</div>
        <div>Pants:{cart.numberOfProducts.pants}</div>
        <div>watches:{cart.numberOfProducts.watches}</div>
      </div>
    </div>
  );
}
