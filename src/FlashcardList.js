import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import './FlashcardList.css';

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch flashcards from the backend
    fetch('http://localhost:5000/flashcards')
      .then(response => response.json())
      .then(data => setFlashcards(data))
      .catch(error => console.error('Error fetching flashcards:', error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flashcard-list">
      {flashcards.length > 0 && (
        <>
          <Flashcard
            key={flashcards[currentIndex].id}
            question={flashcards[currentIndex].question}
            answer={flashcards[currentIndex].answer}
          />
          <div className="navigation">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
          <div className="progress-indicator">
            {currentIndex + 1} / {flashcards.length}
          </div>
        </>
      )}
    </div>
  );
};

export default FlashcardList;
