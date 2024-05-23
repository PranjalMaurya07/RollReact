import styled from "styled-components";
// import Rules from "./Rules";

const Rolldice = ({ showrules, resetscore, currentDice, rolldice }) => {

    return (
        <Dicecontainer>
            <div onClick={rolldice}>
                <img src={`images/dice_${currentDice}.png`} alt="" />
            </div>
            <h5>
                Click on dice to roll
            </h5>
            <Button1 onClick={resetscore}>Reset Score</Button1>
            <Button2 onClick={showrules}>Show Rules</Button2>
        </Dicecontainer>
    )
}

export default Rolldice;


const Dicecontainer = styled.div`

    margin-top: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 20px;

    img{
        width: 200px;
        height: 200px;
    }

    h5{
        font-size: 19px;
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

const Button2 = styled.button`
width: 200px;
height: 44px;
background-color: black;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover{
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-in;
}

`