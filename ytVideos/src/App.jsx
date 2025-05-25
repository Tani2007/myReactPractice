export default function App() {
  return (
    <div className="h-screen w=screen bg-black flex justify-center  items-center">
      <label
        htmlFor="check"
        className="bg-red-600 w-25 h-10 rounded-full relative"
      >
        <input id="check" type="checkbox" className="sr-only peer" />
        <span className="w-8 h-4/5 bg-yellow-300 absolute top-1 left-1 rounded-full  peer-checked:bg-green-400 peer-checked:left-16 transition-all duration-500"></span>
      </label>
    </div>
  );
}
