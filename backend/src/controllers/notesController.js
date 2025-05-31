import Note from '../models/Note.js';

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error fetching notes', error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    res
      .status(201)
      .json({ message: 'Note created successfully!', note: newNote });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error creating note', error: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const noteId = req.params.id;
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content },
      { new: true }
    );

    if (!updateNote) {
      res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({
      message: 'Note updated successfully!',
      note: updatedNote,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error updating note', error: error.message });
  }
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: 'Note deleted successfully!' });
};
