import React from 'react'
import styled from "styled-components";



const StyledWrapper = styled.div`
font-family: 'Indie Flower', cursive;
position: absolute;
width: 1140;
top: 70%;
left: 20%;
transform: translate(-50%, -50%);
text-align: center;
`

const Homeh1 = styled.h1`
text-transform: uppercase;
margin: 0;
font-size: 2rem;
white-space: nowrap;
font-weight: 300;

`
const BackQuote = styled.div`
margin: 0;
font-size: 1.3rem;
`
const HomeSpan = styled.span`
font-size: 80%;
font-style: italic;
`

const Home = () => {
  return (
    <StyledWrapper className='title'>
      <Homeh1 className='homeh1'>My Lake</Homeh1>
      <BackQuote className='blockquote'>
        A Lake carries you into <br />
        recesses of feeling <br /> otherwise impenetrable
        <br />
          <HomeSpan>William Wordsworth</HomeSpan>
      </BackQuote>
  </StyledWrapper>
  )
}

export default Home
