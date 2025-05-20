export default function Sidebar() {
  return (
    <div>
      <aside className="bg-stone-900 w-50 rounded-r-2xl px-2 h-screen">
        <h1 className=" font-bold text-stone-100 pt-5">Home</h1>
        <h1 className=" font-bold text-stone-100">Movies</h1>
        <h1 className=" font-bold text-stone-100">Music</h1>
        <h1 className=" font-bold text-stone-100">Games</h1>
        <h1 className=" font-bold text-stone-100 mt-10"> Subscriptions</h1>
        <ul>
          <li className="text-stone-100">RomCom</li>
          <li className="text-stone-100">RomCom</li>
          <li className="text-stone-100">RomCom</li>
          <li className="text-stone-100">RomCom</li>
          <li className="text-stone-100">RomCom</li>
        </ul>
      </aside>
    </div>
  );
}
