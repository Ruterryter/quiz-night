import React, { useEffect, useState } from 'react'

export const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(15)
  const [isActive, setIsActive] = useState(false)
  const handleCLick = () => setIsActive(true)

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
        {seconds}
s
      </div>
      <div>
        <button onClick={handleCLick}>
          start quiz
        </button>
      </div>
    </>
  )
}
