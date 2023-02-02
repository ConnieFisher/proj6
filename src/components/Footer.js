import React from 'react'
import styled from "styled-components";



const Wrapper = styled.div`
position:absolute;
left:0;
bottom:0;
right:0;
background-color: #333;
overflow: hidden;
text-align: center;
`
const Footer = () => {
  return (
    <Wrapper className='footWrapper'>
      Footer
    </Wrapper>
  )
}

export default Footer
