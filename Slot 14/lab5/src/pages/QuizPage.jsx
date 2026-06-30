import React from 'react';
import QuizApp from '../components/QuizApp';
import { QuizProvider } from '../QuizContext';

const QuizPage = () => {
  return (
    <div className="container">
      <h2 className="mb-4">Quiz Test</h2>
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </div>
  );
};

export default QuizPage;
