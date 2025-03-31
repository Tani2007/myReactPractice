import Button from "./Button";

export default function Sidebar({
  onClick,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 my-15 px-10 py-16 bg-black md:w-72 rounded-r-xl text-center">
      <h2 className="mb-8  font-bold uppercase md:text-xl text-stone-200 ">
        Your Projects
      </h2>
      <div className="text-center">
        <Button onClick={onClick}>Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((curElem) => {
          let cssClasses =
            "w-full text-left px-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if (curElem.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={curElem.id}>
              <button
                onClick={() => onSelectProject(curElem.id)}
                className={cssClasses}
              >
                {curElem.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
