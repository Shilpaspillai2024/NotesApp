import { useState } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { getNotes } from "./api";
import { useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const { data } = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Notes App
        </h1>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white shadow-sm p-6">
          <NoteForm onAdded={loadNotes} />
        </div>

        <NoteList notes={notes} />
      </div>
    </div>
    </>
  );
}

export default App;
