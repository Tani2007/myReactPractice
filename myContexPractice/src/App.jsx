import Button from "./Button";
import BtnContextProvider from "./myButtonContet";

export default function App() {
  return (
    <div>
      <BtnContextProvider>
        <Button />
      </BtnContextProvider>
    </div>
  );
}
