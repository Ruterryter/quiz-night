import { randomQuestions } from 'Questions';
import React, { useState } from 'react'

//add restart test button 
//add timer to each question 

const questions = randomQuestions

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const userAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <>
      <div>
        {showScore ? (
          <div>
            You scored {score} out of {questions.length}
          </div>
        ) : (
            <>
              <div>
                <div >
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div>{questions[currentQuestion].questionText}</div>
              </div>
              <div>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button onClick={() => userAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
            </>
          )}
      </div>
    </>
  );
}