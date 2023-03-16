import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    console.log(id);
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
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
