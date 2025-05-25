import { useContext, useState } from "react";
import { MyButtonContext, MyButtonContextProvider } from "./Context";
import Anime from "./Anime";

export default function App() {
  const apiState = useContext(MyButtonContext);
  const [acIsOpen, setAcIsOpen] = useState(null);
  console.log(apiState);
  return (
    <div className="h-full  bg-black p-2">
      <h1 className="text-center font-bold text-lime-400  text-3xl p-2 ">
        Top Anime
      </h1>
      <div>
        {apiState.list?.map((curAnime, index) => {
          return (
            <Anime
              curAnime={curAnime}
              key={index}
              acIsOpen={index == acIsOpen ? true : false}
              setAcIsOpen={() =>
                setAcIsOpen((prev) => (prev == index ? null : index))
              }
            />
          );
        })}
      </div>
    </div>
  );
}
