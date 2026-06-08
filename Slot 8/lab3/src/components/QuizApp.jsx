import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: "Jupiter"
  }
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectAnswer = (answer) => {
    const currentQuestion = questionsData[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {isCompleted ? (
        <Result score={score} />
      ) : (
        <Question 
          questionNumber={currentQuestionIndex + 1}
          question={questionsData[currentQuestionIndex].question}
          options={questionsData[currentQuestionIndex].options}
          onSelectAnswer={handleSelectAnswer}
        />
      )}
    </div>
  );
};

export default QuizApp;
