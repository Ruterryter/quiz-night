import React, { useState } from 'react'
import styled from 'styled-components'
import { Quiz } from 'Components/Quiz'
import { AppButton } from './Components/AppButton'

const AppWrapper = styled.div`
  background-color: #26AEBF;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const App = () => {
  const [seconds, setSeconds] = useState(15)
  const [isActive, setIsActive] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const onCLick = () => {
    setStartQuiz(true)
    setShowButton(false)
    setIsActive(true)
  }

  return (
    <AppWrapper>
      <div>
        Quiz night!
    {showButton ? <AppButton title="Start Quiz" onClick={onCLick} /> : null}
      </div>
      {startQuiz ? <Quiz isActive={isActive} seconds={seconds} setSeconds={setSeconds} setIsActive={setIsActive} /> : null}
    </AppWrapper>
  )
}


