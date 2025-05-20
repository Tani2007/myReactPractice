import { useRef, useState } from "react";
import Home from "./pagees/Home";

export default function App() {
  const [cart, setCart] = useState([]);
  const modal = useRef();

  function handleCartClick() {
    modal.current.open();
  }
  return (
    <div>
      <Home
        setCart={setCart}
        ref={modal}
        onCartClick={handleCartClick}
        cart={cart}
      />
    </div>
  );
}
