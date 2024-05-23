import React from 'react'
import styled from 'styled-components';

const Rules = ({showrules}) => {

  return (
    <RulesContainer>
      <div>
        <h2>How to play dice game?</h2>
        <div className='text'>
          <p>(i) Select any number.</p>
          <p>(ii) Click on dice image.</p>
          <p>(iii) After click on dice if selected number is equal to dice number you will get same point as dice.</p>
          <p>(iv) If you get wrong guess then 2 point will be deducted.</p>
        </div>
      </div>
        <Button1 onClick={showrules}>Play Now</Button1>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: #fbf1f1;
    padding: 10px;
    width: 400px;
    height: 250px;
    position: absolute;
    top: 220px;
    left: 450px;
    border: none;
    border-radius: 10px;

    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 20px;
    }
`

const Button1 = styled.button`
width: 200px;
height: 44px;
background-color: white;
color: black;
border: 1px solid black;
border-radius: 5px;
cursor: pointer;


&:hover{
  background-color: black;
  color: white;
  border: 1px solid black;
  transition: 0.3s background ease-in;
}
`