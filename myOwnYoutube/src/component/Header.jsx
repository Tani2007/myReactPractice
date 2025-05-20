import { useContext } from "react";
import { YoutubeContext } from "./store";

export default function Header({ sidebar, setSidebar }) {
  const { handleSidebar } = useContext(YoutubeContext);
  return (
    <header className="-mt-8 flex justify-between px-5 shadow-lg">
      <div className="flex items-center ">
        <img
          onClick={handleSidebar}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          className="h-10"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCbYzYA55iyMGtiG0vt0uIS0LprwQvvpgTBiuDD9nhcdzPPh-ITaXFffEAcPGbtnXhFw&usqp=CAU"
          alt=""
          className="h-30 px-2"
        />
      </div>
      <div className="mt-10 -ml-10">
        <input
          type="text"
          className="bg-stone-400 p-2 rounded-l-4xl md:w-100 o "
        />
        <button className="bg-stone-500 p-2 rounded-r-4xl">Search</button>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
          className="h-10 mt-10"
        />
      </div>
    </header>
  );
}
