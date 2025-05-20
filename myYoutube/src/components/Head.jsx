import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

export default function Head() {
  const dispatch = useDispatch();
  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }
  return (
    <div className="flex justify-between shadow-lg">
      <div className=" flex  items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4k5mE0gns4he5FAsfwJpBaIIgTNxZxz8QQ&s"
          alt=""
        />
        <img
          className="h-10 w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHWLyaSJh_FHHKfVYk2Uo5lsfCprd1H9E0Q&s"
          alt=""
        />
      </div>
      <div className="flex items-center">
        <input
          className="px-3 h-10 bg-zinc-300 rounded-l-4xl w-35 md:w-100 outline-none"
          type="text"
        />
        <button className="bg-zinc-600 rounded-r-4xl px-3 h-10 ">SEARCH</button>
      </div>
      <div>
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2wVuYo0RcYOzyfBXCAT8wmtdiG02nlYvIA&s"
          alt=""
        />
      </div>
    </div>
  );
}
