import { useContext } from "react";
import Buttons from "./Buttons";
import Sidebar from "./SIdebar";
import { YoutubeContext } from "./store";

export default function Body() {
  const { sideBarOpen } = useContext(YoutubeContext);
  return (
    <div className="flex">
      <div>{sideBarOpen && <Sidebar />}</div>
      <Buttons />
    </div>
  );
}
