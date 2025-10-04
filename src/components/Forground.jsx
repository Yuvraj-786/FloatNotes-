import React, { useRef, useState } from "react";
import Cards from "./Cards";
import Notes from "./Notes";
import NotesWrapper from "./NotesWrapper";

function Forground() {
  const ref = useRef(null);
  const [notes, setNotes] = useState([{title: "Simple React Notes", note: "Welcome! a sleek UI-driven React Project Effortlessely Create, Drag, Delete, and rediscover your thoughts, Designed for flow, with zero friction."}]);
  const [showNotes, setShowNotes] = useState(false);

 const handleCreateNote = (newNote) => {
  const noteBlob = new Blob([newNote.note], { type: "text/plain" });
  const fileSize = (noteBlob.size / 1024).toFixed(2) + " KB";

  const noteWithSize = {
    ...newNote,
    fileSize,
  };

  setNotes((prev) => [...prev, noteWithSize]);
  setShowNotes(false);
};

  const toggleCreate = () => {
    setShowNotes((prev) => !prev);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id != id));
    console.log("Note deleted");
  }


  return (
    <>
      <div
        ref={ref}
        className="fixed w-full h-full z-[3] top-0 left-0 bg-zinc-800/50 p-6 flex gap-5 flex-wrap"
      >
        {notes.map((note) => (
          <Cards
            id={note.id}
            key={note.id}
            reference={ref}
            onDelete={()=> handleDelete(note.id)}
            data={{
              desc: note.note,
              fileSize: note.fileSize,
              close: false,
              download: false,
              tag: { isOpen: true, title: note.title, color: "green" },
            }}
          />
        ))}

        {/* Floating Create Button */}
        <div className="absolute top-4 right-4 z-[10]">
          <NotesWrapper toggleCreate={toggleCreate} />
        </div>

        {/* Conditional Notes Form */}
        {showNotes && (
          <div className="absolute z-[3] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[10]">
            <Notes onCreate={handleCreateNote} />
          </div>
        )}
      </div>
    </>
  );
}

export default Forground;