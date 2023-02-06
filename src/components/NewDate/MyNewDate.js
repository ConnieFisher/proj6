import React from 'react'
import styled from 'styled-components'

const StyledPara = styled.p`
  text-transform: lowercase;
  line-height: 1;
  padding-left: 20px;
  padding-bottom: 30px;
  margin: auto;
  text-align: center;
  &:first-letter {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: bold;
  }
`
const MyNewDate = () => {
  const current = new Date()

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  const mydate = current.toLocaleDateString('en-us', options)

  return (
    <div>
      <StyledPara>Today's date is {mydate}</StyledPara>
    </div>
  )
}

export default MyNewDate
