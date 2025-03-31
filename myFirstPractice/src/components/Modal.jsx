import { useImperativeHandle, useRef } from "react";
import Button from "./Button";

export function Modal({ children, ref, buttonCaption }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog
      className="backdrop:bg-stone-900/90 font-bold p-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md bg-gradient-to-tr from-stone-400 to-stone-200"
      ref={dialog}
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>
  );
}
