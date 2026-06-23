import React from 'react';
import QuizApp from './components/QuizApp';
import { QuizProvider } from './QuizContext';

function App() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
}

export default App;
