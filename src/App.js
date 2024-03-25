import Header from "./components/header";
import NoteInput from "./components/noteInput";
import Notes from "./components/notes";
import { useState } from "react";

function App() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  function handleNoteChange(e) {
    setNoteText(e.target.value);
  }
  function handleNotesAdd() {
    setNotes([...notes, noteText]);
    setNoteText("");
    console.log(notes);
  }
  function handleRemoveNote(index) {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 2);
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <Header />
      <NoteInput
        handleNotesAdd={handleNotesAdd}
        noteText={noteText}
        handleNoteChange={handleNoteChange}
      />
      <Notes notes={notes} handleRemoveNote={handleRemoveNote} />
    </div>
  );
}

export default App;
