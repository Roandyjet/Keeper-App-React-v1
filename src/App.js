import "./App.css";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";
import notes from "./notes";

console.log(notes);
function App() {
  return (
    <div>
      <Header />
      {notes.map((secret) => (
        <Note key={secret.key} title={secret.title} content={secret.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
