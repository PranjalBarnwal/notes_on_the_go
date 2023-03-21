import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import { useState, useEffect } from "react";
function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.unshift({
      text: "",
      time: Date.now(),
      color,
      id: Math.floor(Math.random()) + Date.now(),
    });
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
