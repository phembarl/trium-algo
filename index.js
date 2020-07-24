import express from 'express';
import findMostWord from './src/controllers/mostWord';
import checkString from './src/middleware/checkString';

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/most-word', checkString, findMostWord);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: 'that route does not exist',
  });
});

app.listen(PORT || 5000, () => {
  console.log(`> app is being served on port ${PORT}`);
});

export default app;
