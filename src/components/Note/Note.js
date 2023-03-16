import React from "react";
import "./Note.css";
import Trash from "../../assets/Trash.png";
const Note = (props) => {
  return (
    <div className="note">
      <textarea
        id=""
        style={{ backgroundColor: props.note.color }}
        className="note_text"
        defaultValue={props.note.text}
      />
      <div className="note_footer">
        <p>{props.note.time}</p>
        <img src={Trash} alt="" className="trash" onClick={() => props.deleteNote(props.note.id)}/>
      </div>
    </div>
  );
};

export default Note;
