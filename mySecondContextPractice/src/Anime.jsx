import { useContext } from "react";
import { MyButtonContext } from "./Context";

export default function Anime({ curAnime, acIsOpen, setAcIsOpen }) {
  return (
    <div
      onClick={setAcIsOpen}
      className=" bg-red-300 mx-auto mb-5  rounded-xs p-2 w-8/12 h-auto cursor-pointer"
    >
      <div className="font-bold flex justify-between ">
        <h1 className="">{curAnime.title}</h1>
        <span>🔽</span>
      </div>
      {acIsOpen ? (
        <div className="flex flex-row-reverse p-2    duration-100">
          <img src={curAnime.image} className="w-23 h-aut0" alt="" />
          <div>
            <h1>Total Episodes 👉 {curAnime.totalEpisodes}</h1>
            <p>Descrption👉{curAnime.description}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
