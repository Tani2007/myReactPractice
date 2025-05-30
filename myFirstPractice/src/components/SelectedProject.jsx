import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete }) {
  const formattedDate = new Date(project.dueData).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16 pr-5">
      <header className="pb-4 mb-4  border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="font-bold hover:text-red-500 active:text-red-500"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400 ">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
