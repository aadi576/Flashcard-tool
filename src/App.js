import React, { useState } from 'react';
import Flashcard from './Flashcard';
import FlashcardForm from './FlashcardForm';
import './App.css';

const initialFlashcards = [
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    // Add more flashcards as needed
];

const App = () => {
    const [flashcards, setFlashcards] = useState(initialFlashcards);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const handlePrevious = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };

    const handleAddFlashcard = (newFlashcard) => {
        setFlashcards([...flashcards, newFlashcard]);
    };

    const handleDeleteFlashcard = (id) => {
        setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
        if (currentIndex >= flashcards.length) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
        }
    };

    const currentFlashcard = flashcards[currentIndex];

    return (
        <div className="app">
            <header>
                <h1>Flashcard Learning Tool</h1>
            </header>
            <main>
                {flashcards.length > 0 ? (
                    <>
                        <Flashcard
                            question={currentFlashcard.question}
                            answer={currentFlashcard.answer}
                            isFlipped={isFlipped}
                            onFlip={handleFlip}
                        />
                        <div className="button-group">
                            <button onClick={handlePrevious} className="nav-button">Previous</button>
                            <button onClick={handleFlip} className="flip-button">
                                {isFlipped ? 'Show Question' : 'Show Answer'}
                            </button>
                            <button onClick={handleNext} className="nav-button">Next</button>
                        </div>
                        <div className="stats">
                            <p>Flashcards: {flashcards.length}</p>
                            <p>Current Index: {currentIndex + 1}</p>
                            <button onClick={() => handleDeleteFlashcard(currentFlashcard.id)} className="delete-button">
                                Delete Current Flashcard
                            </button>
                        </div>
                    </>
                ) : (
                    <p className="no-flashcards">No flashcards available. Please add some.</p>
                )}
                <FlashcardForm onAddFlashcard={handleAddFlashcard} />
            </main>
            <footer>
                <p>&copy; 2024 Flashcard Learning Tool</p>
            </footer>
        </div>
    );
};

export default App;
