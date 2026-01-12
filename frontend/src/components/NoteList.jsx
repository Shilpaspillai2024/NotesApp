const NoteList=({notes})=>{

  if (!notes.length)
    return (
      <p className="text-center text-gray-500 py-8">
        No notes yet! Create your first note above.
      </p>
    );

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note._id}
          className="bg-white p-5 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            {note.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{note.content}</p>
        </div>
      ))}
    </div>
  )
}
export default NoteList