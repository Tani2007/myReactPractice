import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-stone-900 p-5 w-[100vw] ">
      <div className="text-2xl ">
        <span className="text-red-600">&lt;Hola</span>
        <span className="text-orange-400">Coder</span>
        <span className="text-blue-600">.com&gt;</span>
      </div>
      <div>
        <ul className="flex space-x-3 text-stone-50 font-bold">
          <NavLink to={"/body"}>Home</NavLink>
          <NavLink to={"/about"}>AboutUs</NavLink>
          <li>Help</li>
          <Link to={"/contact"} className="mr-4">
            ContactUs
          </Link>
        </ul>
      </div>
    </header>
  );
}
