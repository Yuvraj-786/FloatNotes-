import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Notes({ onCreate }) {
  const [inputData, setInputData] = useState({ title: "", note: "" });

  const handleSave = (e) => {
    e.preventDefault();
    if (!inputData.note) return alert("Note Cant be empty.");

    const newNote = {
      ...inputData,
      id: uuidv4(),
    };

    onCreate(newNote); // 🔥 Send to parent
    setInputData({ title: "", note: "" }); // Clear input
  };

  return (
    <form onSubmit={handleSave} className="w-80 p-4 rounded-[20px] bg-zinc-700 text-white">
      <h3 className="text-lg font-semibold mb-2">Create Notes</h3>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 rounded bg-zinc-600/60 mb-2"
        value={inputData.title}
        onChange={(e) => setInputData({ ...inputData, title: e.target.value })}
      />

      <textarea
        placeholder="Write something..."
        className="w-full p-2 rounded bg-zinc-600/60 h-32 resize-none mb-2"
        value={inputData.note}
        onChange={(e) => setInputData({ ...inputData, note: e.target.value })}
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-black font-semibold py-2 rounded-full"
      >
        Create
      </button>
    </form>
  );
}

export default Notes;