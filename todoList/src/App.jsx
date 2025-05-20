import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(input);
  function handleClick() {
    setTodos((prevTodo) => {
      return [...prevTodo, input];
    });
    setInput("");
  }
  function handleDelete(id) {
    const newTodo = todos.filter((curElem, index) => {
      return index != id;
    });
    setTodos(newTodo);
  }
  return (
    <div className="h-screen w-screen bg-gray-300 flex flex-col items-center">
      <h1 className="mt-30 font-bold text-4xl mb-10">Todo List</h1>
      <div className="mb-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-zinc-400 p-1 px-2 rounded-l-2xl focus:outline-none"
          type="text"
        />
        <button
          onClick={handleClick}
          className="bg-zinc-700 p-1 rounded-r-2xl hover:bg-zinc-500"
        >
          Add
        </button>
      </div>
      <div className="w-1/2 h-auto bg-stone-500 rounded-sm ">
        <ul>
          {todos.map((curTodo, index) => {
            if (curTodo.length == 0) {
              return;
            }
            return (
              <li key={index} className="flex justify-between px-1 py-2">
                <p>{curTodo}</p>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 rounded-lg px-2 hover:bg-red-200 
                font-bold text-stone-600 hover:text-stone-900"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
