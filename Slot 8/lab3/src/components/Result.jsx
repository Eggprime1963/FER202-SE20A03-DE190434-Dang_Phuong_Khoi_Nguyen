import React from 'react';

const Result = ({ score }) => {
  return (
    <div className="result-container">
      <h1>Quiz Ended</h1>
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Result;
