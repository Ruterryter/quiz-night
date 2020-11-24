import React, { useState } from 'react'
import styled from 'styled-components'
import { Quiz } from 'Components/Quiz'
import { AppButton } from './Components/AppButton'

const AppWrapper = styled.div`
  background-color: #4D6F73;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const QuizTitle = styled.h1`
  color: papayawhip;
`
const QuizRules = styled.p`
  color: papayawhip;
  width: 50vw;
  font-family:'Oxygen'; 
  font-weight: 400;
  font-size: 1.5rem;
`


export const App = () => {
  const [seconds, setSeconds] = useState(15)
  const [isActive, setIsActive] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [showRules, setShowRules] = useState(true)
  const onCLick = () => {
    setStartQuiz(true)
    setShowButton(false)
    setShowRules(false)
    setIsActive(true)
  }

  return (
    <AppWrapper>
      <QuizTitle>
        Food Quiz!
       {showRules ? <QuizRules>
          You get 10 questions with 4 alternatives. You have 15 seconds to answer each question.
          If you need more time on a question you can press the button "More Time" to get 10 extra seconds. But
          remeber that you can only use this button once. Good luck!
       </QuizRules> : null}
        {showButton ? <AppButton title="Start Quiz" onClick={onCLick} /> : null}
      </QuizTitle>
      {startQuiz ? <Quiz isActive={isActive} seconds={seconds} setSeconds={setSeconds} setIsActive={setIsActive} /> : null}
    </AppWrapper>
  )
}



