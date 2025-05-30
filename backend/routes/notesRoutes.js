import express from 'express';

import {
  getAllNotes,
  createNote,
  updateNote,
} from '../controllers/notesController.js';

const router = express.Router();

router.get('/', getAllNotes);

router.post('/', createNote);

router.put('/:id', updateNote);

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Note deleted successfully!' });
});

export default router;
