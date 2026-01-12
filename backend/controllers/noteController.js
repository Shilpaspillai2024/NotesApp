import Note from "../model/Note.js";

export const createNote = async (req, res) => {
  try {


    const { title, content } = req.body;
     if (!title ) {
      return res.status(400).json({ error: "Title cannot be empty" });
    }
    
    if (!content ) {
      return res.status(400).json({ error: "Content cannot be empty" });
    }
    const note = await Note.create({title,content});
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};