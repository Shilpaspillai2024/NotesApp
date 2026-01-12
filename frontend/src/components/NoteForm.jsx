import { useState } from "react";
import { addNotes } from "../api";

const NoteForm = ({onAdded}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit=async(e)=>{
  e.preventDefault();

  if (!title.trim()) {
      alert("Title cannot be empty!");
      return;
    }

      if (!content.trim()) {
      alert("Content cannot be empty!");
      return;
    }
  await addNotes({title,content});
  setTitle("")
  setContent("")
  onAdded();
  }

  return (
     <div className="space-y-4">
      <input
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        placeholder="Note content"
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={submit}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Add Note
      </button>
    </div>
  );
};
export default NoteForm;
