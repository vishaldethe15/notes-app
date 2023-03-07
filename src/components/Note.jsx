import React from "react";

const Note = ({ id, text, date, handleDelete }) => {
  return (
    <div className="note">
      <span>{text}</span>

      <div className="note-footer">
        <small>{date}</small>
        <button onClick={() => handleDelete(id)}>
          <i className="bi bi-trash3-fill" title="delete"></i>
        </button>
      </div>
    </div>
  );
};

export default Note;
