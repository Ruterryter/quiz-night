import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { randomQuestions } from 'Questions';
import { CountdownTimer } from './CountdownTimer';

//add restart test button 

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
`

const StatusBar = styled.div`
  margin: 20px 0 10px 0;
`
const CuerrentQuestionIndex = styled.span`
  font-weight: bold;
  color: #544a39
`
const Question = styled.p`
  font-style: italic;
  color: #544a39
`


const AnswerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
  color: #544a39;
  width: 7rem;
  height: 4rem;
  margin: 20px 0 10px 0;
  border: none; 
`
const ScoreContainer = styled.div`
   display: flex;
`
const ScoreSummary = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: papayawhip;
`
const Restart = styled.button`
  display: flex;
  margin-top: 3rem;
`



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
      <QuizContainer>
        {showScore ? (
          <ScoreContainer>
            <ScoreSummary>
              You scored {score} out of {questions.length} questions!
              <br></br>
              {falseScore} questions had the wrong answer
              <br></br>
              {isNaN(unAnswered) ? '' : ` and ${unAnswered} questions were unanswered.`}
              <Restart>Restart</Restart>
            </ScoreSummary>

          </ScoreContainer>
        ) : (
            <>
              <StatusBar >
                <CuerrentQuestionIndex>Question {currentQuestion + 1}/{questions.length}</CuerrentQuestionIndex>
              </StatusBar>
              <Question>{questions[currentQuestion].questionText}</Question>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <AnswerButton onClick={() => userAnswer(answerOption.isCorrect)}>
                  {answerOption.answerText}</AnswerButton>
              ))}
              <CountdownTimer isActive={isActive} seconds={seconds} setSeconds={setSeconds} setIsActive={setIsActive} />
            </>
          )}
      </QuizContainer>
    </>
  );
}