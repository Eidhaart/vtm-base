import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FiEdit2, FiTrash } from "react-icons/fi";
import "./NotesApp.css";

const NotesApp = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNote, setCurrentNote] = useState({ id: "", text: "" });

  useEffect(
    () => {
      localStorage.setItem("notes", JSON.stringify(notes));
    },
    [notes]
  );

  const handleInputChange = e => {
    setCurrentNote({ id: currentNote.id, text: e.target.value });
  };

  const handleNoteSubmit = e => {
    e.preventDefault();

    if (currentNote.id === "") {
      const newNote = {
        id: uuidv4(),
        text: currentNote.text
      };
      setNotes([...notes, newNote]);
    } else {
      const updatedNotes = notes.map(
        note => (note.id === currentNote.id ? currentNote : note)
      );
      setNotes(updatedNotes);
    }

    setCurrentNote({ id: "", text: "" });
  };

  const handleNoteEdit = note => {
    setCurrentNote(note);
  };

  const handleNoteDelete = id => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="app-container">
      <div className="notes-app">
        <div className="notes-input">
          <form onSubmit={handleNoteSubmit}>
            <button type="submit">Save Note</button>
            <textarea value={currentNote.text} onChange={handleInputChange} />
          </form>
        </div>
        <div className="notes-list">
          {notes.map((note, index) =>
            <div className="note" key={note.id}>
              <div className="button-container">
                <button onClick={() => handleNoteEdit(note)}>
                  <FiEdit2 />
                </button>
                <button onClick={() => handleNoteDelete(note.id)}>
                  <FiTrash />
                </button>
              </div>
              <div>
                {note.text}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
