import React, { useContext } from 'react';
import Question from './Question';
import Result from './Result';
import { QuizContext } from '../QuizContext';

const QuizApp = () => {
  const { isCompleted, questions } = useContext(QuizContext);

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div className="quiz-container">
      {isCompleted ? (
        <Result />
      ) : (
        <Question />
      )}
    </div>
  );
};

export default QuizApp;
