import React, { Component, useState } from "react";
import { QUESTIONS } from "./questions";

const App = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [yesAnswers, setYesAnswers] = useState(0);
  const [noAnswer, setNoAnswer] = useState(0);
  const [runs, setRuns] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === 'Yes') {
      setYesAnswers(yesAnswers + 1);
    }else if(answer === 'No'){
      setNoAnswer(noAnswer +1)
    }
      const score = (yesAnswers / 5) * 100;
      setTotalScore(totalScore + score);
      setRuns(runs + 1);
    
  };

  const averageScore = totalScore / runs || 0;

  return (
    <div className="main__wrap">
      <main className="container">
        <div>
          TODO

          <p style={{ fontSize: '20px' }}>Score: {(yesAnswers / 5) * 100}</p>
          <p style={{ fontSize: '20px' }}>Average score: {averageScore.toFixed(2)}</p>
          <div>
            <h2>1. {QUESTIONS[1]}</h2>
            <div style={{ textAlign: "center" }}>
              <button onClick={() => handleAnswer('Yes')}>Yes</button>
              <button onClick={() => handleAnswer('No')}>No</button>
            </div>
          </div>
          <div>
            <h2>2. {QUESTIONS[2]}</h2>
            <div style={{ textAlign: "center" }}>
              <button onClick={() => handleAnswer('Yes')}>Yes</button>
              <button onClick={() => handleAnswer('No')}>No</button>
            </div>
          </div>
          <div>
            <h2>3. {QUESTIONS[3]}</h2>
            <div style={{ textAlign: "center" }}>
              <button onClick={() => handleAnswer('Yes')}>Yes</button>
              <button onClick={() => handleAnswer('No')}>No</button>
            </div>
          </div>
          <div>
            <h2>4. {QUESTIONS[4]}</h2>
            <div style={{ textAlign: "center" }}>
              <button onClick={() => handleAnswer('Yes')}>Yes</button>
              <button onClick={() => handleAnswer('No')}>No</button>
            </div>
          </div>
          <div>
            <h2>5. {QUESTIONS[5]}</h2>
            <div style={{ textAlign: "center" }}>
              <button onClick={() => handleAnswer('Yes')}>Yes</button>
              <button onClick={() => handleAnswer('No')}>No</button>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
}

export default App;