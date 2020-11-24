
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
 display: flex;
 padding: 0.7em 1.4em;
 margin: 1em 0.3em 0.3em 0;
 border-radius: 0.15em;
 box-sizing: border-box;
 text-decoration: none;
 text-transform: uppercase;
 font-weight: 700;
 color: papayawhip;
 background-color: #8C618C;
 box-shadow: inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
 text-align: center;

 a.active {
 top:0.1em;
}
`

export const AppButton = ({ onClick, title }) => {
  return (
    <Button onClick={onClick}>
      {title}
    </Button>
  )
}
