import React, { createContext, useState, useEffect } from 'react';

export const quizData = [
  {
    question: 'What is ReactJS?',
    answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
    correctAnswer: 'A syntax extension for JavaScript'
  }
];

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // Use useEffect Hook to display questions and answer options from state
  useEffect(() => {
    setQuestions(quizData);
  }, []);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer
    });
  };

  const submitAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <QuizContext.Provider value={{
      questions,
      currentQuestionIndex,
      selectedAnswer: selectedAnswers[currentQuestionIndex] || '',
      handleSelectAnswer,
      submitAnswer,
      nextQuestion,
      isCompleted,
      score
    }}>
      {children}
    </QuizContext.Provider>
  );
};
