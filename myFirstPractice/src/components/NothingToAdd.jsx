import image from "../assets/no-projects.png";
import Button from "./Button";
export default function NothingToAdd({ onClick }) {
  return (
    <div className="grid place-items-center">
      <img
        className="w-1/3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]  "
        src={image}
        alt=""
      />
      <h1 className="mb-3 font-bold text-4xl text-center">
        No Project Selected
      </h1>
      <h2 className="mt-5 font-bold text-2xl text-center">
        Select a project or get started with a new one.
      </h2>
      <Button onClick={onClick}>ADD A NEW PROJECT</Button>
    </div>
  );
}
