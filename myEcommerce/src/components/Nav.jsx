import { FaSearch } from "react-icons/fa";
const Nav = ({ onCartClick, cart }) => {
  return (
    <div className="bg-gray-950 h-20 flex justify-between items-center px-5 ">
      <div>
        <span className="text-4xl font-bold text-orange-600">S</span>
        <span className="text-yellow-500 font-bold text-2xl">mall</span>
        <span className="text-4xl font-bold text-red-600">B</span>
        <span className="text-2xl text-blue-300 font-bold">asket</span>
      </div>
      <div className="flex justify-center items-center space-x-0.5 h-10 w-90 bg-gray-100 rounded-3xl">
        <input type="text" className="h-full w-full focus:outline-none " />
        <FaSearch className="text-gray-950 bg-gray-400 h-full w-10 p-3 rounded-r-3xl" />
      </div>
      <button
        onClick={onCartClick}
        className=" mr-5 bg-yellow-300 text-gray-950 font-bold px-2 py-1 rounded-xl"
      >
        Cart({cart.length})
      </button>
    </div>
  );
};

export default Nav;
