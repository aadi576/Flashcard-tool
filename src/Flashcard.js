import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null); // Track if the answer is correct
    const [showAnswer, setShowAnswer] = useState(false); // Control visibility of the correct answer

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
            setIsCorrect(true);
            setShowAnswer(false); // Hide answer when moving to the next question
        } else {
            setIsCorrect(false);
        }
    };

    const handleShowAnswer = () => {
        setShowAnswer(true);
    };

    return (
        <div className="flashcard">
            <div className="question">{question}</div>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Type your answer"
                className="answer-input"
            />
            <button onClick={handleSubmit} className="submit-button">Submit</button>
            <button onClick={handleShowAnswer} className="show-answer-button">Show Answer</button>
            {isCorrect === false && (
                <div className="feedback incorrect">
                    Wrong Answer!
                </div>
            )}
            {showAnswer && (
                <div className="answer">
                    The correct answer is: {answer}
                </div>
            )}
        </div>
    );
};

export default Flashcard;
