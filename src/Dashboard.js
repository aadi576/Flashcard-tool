import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = ({ flashcards, setFlashcards }) => {
  const [newCard, setNewCard] = useState({ question: '', answer: '' });

  const handleAdd = () => {
    axios.post('http://localhost:5000/flashcards', newCard)
      .then(response => setFlashcards([...flashcards, newCard]))
      .catch(error => console.error('Error adding flashcard:', error));
    setNewCard({ question: '', answer: '' });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="Question"
          value={newCard.question}
          onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newCard.answer}
          onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
        />
        <button onClick={handleAdd}>Add Flashcard</button>
      </div>
    </div>
  );
};

export default Dashboard;
