import React, { useEffect } from 'react'

export const CountdownTimer = ({ isActive, seconds, setIsActive, setSeconds }) => {
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
    </>
  )
}
