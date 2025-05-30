export const getAllNotes = (req, res) => {
  res.status(200).json({ message: 'Welcome to the Notes API!' });
};

export const createNote = (req, res) => {
  res.status(201).json({ message: 'Note created successfully!' });
};
