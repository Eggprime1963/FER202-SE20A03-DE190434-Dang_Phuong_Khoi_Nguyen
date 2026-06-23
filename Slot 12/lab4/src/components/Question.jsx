import React, { useContext, useState } from 'react';
import { QuizContext } from '../QuizContext';

const Question = () => {
  const { questions, currentQuestionIndex, selectedAnswer, handleSelectAnswer, submitAnswer, nextQuestion } = useContext(QuizContext);
  
  const questionData = questions[currentQuestionIndex];
  const [showFeedback, setShowFeedback] = useState(false);

  const onSubmit = () => {
    submitAnswer();
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      nextQuestion();
    }, 1500);
  };

  return (
    <div className="question-container">
      <h2 className="question-header">Question {currentQuestionIndex + 1}</h2>
      <p className="question-text">{questionData.question}</p>
      <div className="options-list">
        {questionData.answers.map((option, index) => (
          <div key={index} className="option-item" style={{ marginBottom: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="radio" 
                name={`question-${currentQuestionIndex}`}
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleSelectAnswer(option)}
                disabled={showFeedback}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <button 
        className="option-button" 
        onClick={onSubmit} 
        disabled={!selectedAnswer || showFeedback}
        style={{ marginTop: '15px' }}
      >
        Submit
      </button>

      {showFeedback && (
        <div className="feedback" style={{ marginTop: '15px', fontWeight: 'bold' }}>
          {selectedAnswer === questionData.correctAnswer 
            ? <p style={{color: 'green'}}>Correct!</p> 
            : <p style={{color: 'red'}}>Incorrect! The correct answer is: {questionData.correctAnswer}</p>
          }
        </div>
      )}
    </div>
  );
};

export default Question;
