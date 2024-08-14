import React, { useState } from 'react';
import './FlashcardForm.css';

const FlashcardForm = ({ onAddFlashcard }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFlashcard = {
            id: Date.now(), // Simple unique ID based on timestamp
            question,
            answer
        };
        onAddFlashcard(newFlashcard);
        setQuestion('');
        setAnswer('');
    };

    return (
        <div className="flashcard-form">
            <h2>Add a New Flashcard</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="answer">Answer:</label>
                    <input
                        type="text"
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="add-button">Add Flashcard</button>
            </form>
        </div>
    );
};

export default FlashcardForm;
