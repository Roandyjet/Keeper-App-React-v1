import "./App.css";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";
// import notes from "./notes";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

// console.log(notes);
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  const deleteNote = (id) => {
    setNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
