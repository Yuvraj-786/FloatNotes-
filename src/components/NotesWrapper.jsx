import React from "react";
import { IoCreateOutline } from "react-icons/io5";

function NotesWrapper({ toggleCreate }) {
  return (
    <div className="relative p-4">
      <div
        className="w-12 h-12 bg-zinc-700 flex justify-center items-center p-[14px] rounded-full cursor-pointer"
        onClick={toggleCreate}
      >
        <IoCreateOutline color="white" size={24} />
      </div>
    </div>
  );
}

export default NotesWrapper;