import { randomQuestions } from 'Questions';
import React, { useState } from 'react'
import { CountdownTimer } from './CountdownTimer';
import { AppButton } from './AppButton';

//add restart test button 
//add timer to each question 

const questions = randomQuestions

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [unanswered, setUnanswered] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [startQuiz, setStartQuiz] = useState(false)


  const userAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // const noAnswer = (timeOut) => {
    //   if (timeOut) {
    //     setUnanswered(unanswered + 1)
    //   }


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
        <AppButton title="Start Quiz" onClick={() => setStartQuiz(true)} />
      </div>
      <div>
        {showScore ? (
          <div>
            You scored {score} out of {questions.length}.
            {unanswered} questions where unanswered.
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
                  <button onClick={() => userAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
              <CountdownTimer />
            </>
          )}
      </div>

    </>
  );
}