
import React from 'react'

export const AppButton = ({ onClick, title }) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  )
}
