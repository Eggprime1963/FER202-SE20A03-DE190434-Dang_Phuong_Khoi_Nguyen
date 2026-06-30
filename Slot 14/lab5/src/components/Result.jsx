import React, { useContext } from 'react';
import { QuizContext } from '../QuizContext';

const Result = () => {
  const { score, questions } = useContext(QuizContext);
  
  return (
    <div className="result-container">
      <h1>Quiz Ended</h1>
      <h2>Your Score: {score} out of {questions.length}</h2>
    </div>
  );
};

export default Result;
