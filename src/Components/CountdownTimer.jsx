import React, { useEffect } from 'react'
import styled from 'styled-components'

const Timer = styled.p`
  display: flex; 
  color: papayawhip;
  font-weight: bold;
  font-size: 2rem;
`


export const CountdownTimer = ({ isActive, seconds, setSeconds }) => {
  useEffect(() => {
    let interval = null
    if (isActive && (seconds > 0)) {
      interval = setInterval(() => {
        setSeconds((secondsremaining) => secondsremaining - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds, setSeconds])

  return (
    <>
      <Timer>
        {seconds} seconds left!
      </Timer>
    </>
  )
}
