import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDelete }) => {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />

      {notes.map((note) => (
        <Note key={note.id} {...note} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NotesList;
