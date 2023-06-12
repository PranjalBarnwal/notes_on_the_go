import React, { useState } from "react";
import "./NoteContainer.css";
import Cross from "./../../assets/cross.png"
import Note from "../Note/Note";
const NoteContainer = (props) => {
  const notes = props.notes;
  const [modal, setModal] = useState(true);
  return (
    <div className="note-container">
      <h1>Notes App React</h1>
    <div className="modalparent">
      {modal&& (notes==0) && (
        <div className="modal">
          <div>
          <h2 className="about">About this Note App</h2>
          <img onClick={()=>{
            setModal(false);
          }} className="cross" src={Cross} alt="" />
          </div>
          <br />
          <h4>-It uses React for user-interface and css for styling</h4>
          <br />
          <h4>-Users' data is stored in their local storage</h4>
          <br />
          
          <h4>-Concept of debouncing is used for enabling localstorage</h4>
          <br />
          <h4>-Start creating notes by clicking on the plus button on top left</h4>
          <br />
        </div>
      )}
      </div>
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
          <h3>No notes present</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
