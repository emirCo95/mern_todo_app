import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
  res.json('You got five notes.');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
