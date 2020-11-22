import React, { useEffect, useState } from 'react'

export const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(15)
  const [isActive, setIsActive] = useState(false)
  const handleCLick = () => setIsActive(true)
  // timeOut = setIsActive(false)

  useEffect(() => {
    let interval = null
    if (isActive && (seconds > 0)) {
      interval = setInterval(() => {
        setSeconds((secondsremaining) => secondsremaining - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (
    <>
      <div>
        {seconds} left.
      </div>
      <div>
        <button onClick={handleCLick}>
          Start Quiz
        </button>
      </div>
    </>
  )
}
