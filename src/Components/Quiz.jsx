import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { randomQuestions } from 'Questions';
import { CountdownTimer } from './CountdownTimer';

//add restart test button 

const questions = randomQuestions

export const Quiz = ({ isActive, seconds, setIsActive, setSeconds }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [falseScore, setFalseScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const unAnswered = questions.length - (score + falseScore)

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSeconds(15);
    } else {
      setShowScore(true);
    }
  }

  const userAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (!isCorrect) {
      setFalseScore(falseScore + 1)
    }

    goToNextQuestion();
  }

  useEffect(() => {
    if (seconds === 0) {
      goToNextQuestion()
    }
  }, [seconds])

  return (
    <>
      <div>
        {showScore ? (
          <div>
            You scored {score} out of {questions.length}.
              And got {falseScore} wrong answers.
            {isNaN(unAnswered) ? '' : `${unAnswered} was unanswered.`}
            {console.log(unAnswered)}
            <button>Restart</button>
          </div>
        ) : (
            <>
              < div >
                <div >
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div>{questions[currentQuestion].questionText}</div>
              </div>
              <div>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button onClick={() => userAnswer(answerOption.isCorrect)}>
                    {answerOption.answerText}</button>
                ))}
              </div>
              <CountdownTimer isActive={isActive} seconds={seconds} setSeconds={setSeconds} setIsActive={setIsActive} />
            </>
          )}
      </div>
    </>
  );
}