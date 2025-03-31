import { useState } from "react";
import AddNew from "./components/AddNew";
import NothingToAdd from "./components/NothingToAdd";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

export default function App() {
  const [dataUpdated, setDataUpdated] = useState({
    btnOn: "no",
    project: [],
  });
  console.log(dataUpdated);
  function handleSelectProject(id) {
    console.log(id);
    setDataUpdated((prevState) => {
      return {
        ...prevState,
        btnOn: id,
      };
    });
  }

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

  function handleCancelClick() {
    setDataUpdated((prevData) => {
      return {
        ...prevData,
        btnOn: "no",
      };
    });
  }
  function handleDeleteProject() {
    setDataUpdated((prevData) => {
      return {
        ...prevData,
        btnOn: "no",
        project: prevData.project.filter(
          (myData) => myData.id != prevData.btnOn
        ),
      };
    });
  }
  const selectedProject = dataUpdated.project.find(
    (myProject) => myProject.id === dataUpdated.btnOn
  );
  console.log(selectedProject);
  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );
  if (dataUpdated.btnOn == "yes") {
    content = <AddNew onCancel={handleCancelClick} onSave={handleSaveClick} />;
  } else if (dataUpdated.btnOn == "no") {
    content = <NothingToAdd onClick={handleAddClick} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        selectedProjectId={dataUpdated.btnOn}
        onClick={handleAddClick}
        onSelectProject={handleSelectProject}
        projects={dataUpdated.project}
      />
      {content}
    </main>
  );
}
