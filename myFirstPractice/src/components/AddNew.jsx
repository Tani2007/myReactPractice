import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import { Modal } from "./Modal";

export default function AddNew({ onCancel, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  function handleInsideSave() {
    const titleData = title.current.value;
    const descriptionData = description.current.value;
    const dueDateData = dueDate.current.value;

    if (
      titleData.trim() === "" ||
      descriptionData.trim() === "" ||
      dueDateData.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSave({
      title: titleData,
      description: descriptionData,
      dueData: dueDateData,
    });
  }
  return (
    <>
      <Modal buttonCaption="CLOSE" ref={modal}>
        <h1 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h1>
        <p className="text-stone-600 mb-4">
          Oops .. looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make ysre you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end  gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleInsideSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <Input ref={title} label="title" />
        <Input ref={description} label="description" />
        <Input ref={dueDate} label="due-date" type="date" />
        <div className=""></div>
      </div>
    </>
  );
}
