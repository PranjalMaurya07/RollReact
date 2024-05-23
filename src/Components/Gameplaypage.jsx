import React from "react";
import styled from "styled-components";
import NumberSelector from "./Numberselector";
import Rolldice from "./Rolldice";
import { useState } from "react";
import TotalScore from "./Totalscore";
import Rules from "./Rules";

const Gameplay = () => {
  const [rules, setRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rolldice = () => {

    if (!selected) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setcurrentDice(randomNumber);

    if (selected === randomNumber) {
      setScore((prev) => prev + randomNumber);
    }
    else {
      setScore((prev) => prev - 2);
    }
    setSelected(undefined);
  }

  const resetScore = () => {
    setScore(0);
  }

  const showRules = () => {
    setRules(!rules);
  }

  return (
    <Container>
      <div className="score">
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selected={selected} setSelected={setSelected} />
      </div>
      <div>

        {rules ? <Rules showrules = {showRules} /> : <Rolldice showrules={showRules} resetscore={resetScore} currentDice={currentDice} rolldice={rolldice} />}
      </div>
    </Container>
  )
}

export default Gameplay;

const Container = styled.div`
  .score{

      max-width: 1182px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 50px;
      margin-top: 20px;
    }

  /* h1{
    font-size: 80px;
    line-height: 100px;
  }
  h5{
    font-size: 24px;
  } */
  `