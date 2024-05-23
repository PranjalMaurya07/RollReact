import React from "react";
import styled from "styled-components";

const FrontPage = ({play}) => {
    return (
        <Container>
            <img src="images/dices 1.png" alt="" />
            <div className="home_text">
                <h1>DICE GAME</h1>
                <Button onClick={play}>Play Now</Button>
            </div>
        </Container>
    )
}

export default FrontPage;

const Container = styled.div`
  margin-top: 30px;
  max-width: 1182px;
  height: 522px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    width: 649px;
    height: 522px;
  }

  .home_text{
    h1{
        font-size: 90px;
    }
  }
`


const Button = styled.button`
width: 220px;
height: 44px;
background-color: black;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
position: absolute;
left: 960px;

&:hover{
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-in;
}

`