import { useState } from "react";
import NewTask from "./NewTask";

export default function Tasks() {
  const [tasks, setTasks] = useState({
    task: [],
  });
  function handleTaskAdd(newTask) {
    setTasks((prevTask) => {
      const newTask2 = {
        myNewTask: newTask,
        id: Math.random(),
      };
      return {
        ...prevTask,
        task: [...prevTask.task, newTask2],
      };
    });
  }
  function handleDeleteTask(id) {
    setTasks((prevState) => {
      return {
        ...prevState,
        task: prevState.task.filter((myDelTask) => myDelTask.id != id),
      };
    });
  }
  console.log(tasks);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onTaskAdd={handleTaskAdd} />
      {tasks.task.length === 0 && (
        <p className="text-stone-800 my-4">
          This Project does not have any task yet.
        </p>
      )}
      {tasks.task.length != 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.task.map((mytask) => {
            return (
              <li className="flex justify-between my-4" key={mytask.id}>
                <span>{mytask.myNewTask}</span>
                <button
                  onClick={() => handleDeleteTask(mytask.id)}
                  className="text-stone-700 rounded-sm px-1 font-bold
                  hover:text-red-500 active:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
