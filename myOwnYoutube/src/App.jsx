import { useState } from "react";
import Header from "./component/Header";
import Sidebar from "./component/SIdebar";
import Body from "./component/Body";
import { YoutubeContext, YoutubeContextProvider } from "./component/store";

export default function App() {
  return (
    <YoutubeContextProvider>
      <div>
        <Header />
        <Body />
      </div>
    </YoutubeContextProvider>
  );
}
