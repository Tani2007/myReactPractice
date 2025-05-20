import { useImperativeHandle, useRef } from "react";

export default function Modal({ ref, cart }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        return dialog.current.showModal();
      },
    };
  });

  return (
    <div>
      <dialog
        ref={dialog}
        className="backdrop:bg-stone-100/50 font-bold p-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md bg-gradient-to-tr from-yellow-500 to-yellow-100"
      >
        <div>
          {cart?.map((curItem) => {
            return (
              <div>
                <h1>
                  {curItem.name} {curItem.price}
                </h1>
              </div>
            );
          })}
        </div>
        <form method="dialog" className="mt-4 text-right">
          <button className="bg-[#189AB4] px-2 py-1.5 rounded-sm">
            CheckOut
          </button>
        </form>
      </dialog>
    </div>
  );
}
