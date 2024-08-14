const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_mysql_password',
  database: 'flashcards_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

// Get all flashcards
app.get('/flashcards', (req, res) => {
  const query = 'SELECT * FROM flashcards';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Add new flashcard
app.post('/flashcards', (req, res) => {
  const { question, answer } = req.body;
  const query = 'INSERT INTO flashcards (question, answer) VALUES (?, ?)';
  db.query(query, [question, answer], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
