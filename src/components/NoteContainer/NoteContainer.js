import React from "react";
import "./NoteContainer.css";
import Note from "../Note/Note";
const NoteContainer = (props) => {
  const notes = props.notes;
  return (
    <div className="note-container">
      <h2>Notes</h2>

      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((item, index) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h2>No notes present</h2>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
