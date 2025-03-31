import { useState } from "react";
import AddNew from "./components/AddNew";
import NothingToAdd from "./components/NothingToAdd";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [dataUpdated, setDataUpdated] = useState({
    btnOn: "no",
    project: [],
  });

  function handleAddClick() {
    setDataUpdated((prevData) => {
      return {
        ...prevData,
        btnOn: "yes",
      };
    });
  }
  function handleSaveClick(fullInputDataObj) {
    setDataUpdated((prevData) => {
      const newFullObj = {
        ...fullInputDataObj,
        id: Math.random(),
      };
      return {
        ...prevData,
        btnOn: "no",
        project: [...prevData.project, newFullObj],
      };
    });
  }
  console.log(dataUpdated);

  function handleCancelClick() {
    setDataUpdated((prevData) => {
      return {
        ...prevData,
        btnOn: "no",
      };
    });
  }
  let content;
  if (dataUpdated.btnOn == "yes") {
    content = <AddNew onCancel={handleCancelClick} onSave={handleSaveClick} />;
  } else {
    content = <NothingToAdd onClick={handleAddClick} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onClick={handleAddClick} projects={dataUpdated.project} />
      {content}
    </main>
  );
}
