import express from 'express';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});
