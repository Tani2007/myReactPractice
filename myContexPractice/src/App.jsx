import Mycontext from "../../mySecondContextPractice/src/Context";
import Button from "./Button";

export default function App() {
  return (
    <div>
      <Mycontext>
        <Button />
      </Mycontext>
    </div>
  );
}
