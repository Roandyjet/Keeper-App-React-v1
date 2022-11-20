import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevValue) => {
      //    NOT DESTRUCTURED VERSION: return { ...prevValue, [e.target.name]: e.target.value };
      //   [name] not name: if we want it to be the constant name value above NOT name (string)
      return { ...prevValue, [name]: value };
    });
  };

  const submitNote = (e) => {
    props.onAdd(note);

    setNote({ title: "", content: "" });

    // submit button in a form refresh the page when submited, so we need to prevent that by typing:
    e.preventDefault();
  };

  return (
    <div>
      <form action="" className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            type="text"
            name="title"
            // to make the input CONTROLED, add:
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          // to make the input CONTROLED, add:
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded && true}>
          <Fab type="submit" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
