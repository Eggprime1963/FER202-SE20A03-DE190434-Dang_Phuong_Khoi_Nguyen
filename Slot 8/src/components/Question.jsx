import React from 'react';

const Question = ({ questionNumber, question, options, onSelectAnswer }) => {
  return (
    <div className="question-container">
      <h2 className="question-header">Question {questionNumber}</h2>
      <p className="question-text">{question}</p>
      <div className="options-list">
        {options.map((option, index) => (
          <div key={index} className="option-item">
            <button 
              className="option-button"
              onClick={() => onSelectAnswer(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
