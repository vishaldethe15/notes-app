import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const charLimit = 200;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>

      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button onClick={handleSave}>
          <i className="bi bi-check-square-fill" title="save"></i>
        </button>
      </div>
    </div>
  );
};

export default AddNote;
