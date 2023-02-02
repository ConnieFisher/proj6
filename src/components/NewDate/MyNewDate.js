import React from 'react'
import styled from 'styled-components'

const StyledPara = styled.p`
  text-transform: lowercase;
  line-height: 1; 
&:first-letter {
  text-transform: uppercase;
  font-size: 3em;
  font-weight: bold;
 }
`
const MyNewDate = () => {
  const current = new Date()
  const weekday = current.getDay();
  let dayName;

  switch ( weekday )
  {
    case 1:
      dayName = 'Sunday';
      break;
    case 2:
      dayName = 'Monday';
      break;
    case 3:
      dayName = 'Tuesday';
      break;
    case 4:
      dayName = 'Wednesday';
      break;
    case 5:
      dayName = 'Thursday';
      break;
    case 6:
      dayName = 'Friday';
      break;
   
    default:
        dayName = 'Invalid day';
    }
  

const date = `${dayName} ${ current.getDate() }/${ current.getMonth() + 1 }/${ current.getFullYear() }`;
 
  return(
  <div>
      <StyledPara>Today's date is {date}</StyledPara>
      
  </div>
)}

export default MyNewDate
