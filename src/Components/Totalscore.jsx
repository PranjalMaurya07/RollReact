import React from "react";
import styled from "styled-components";

const TotalScore = ({score}) => {
    return(
        <Score>
          <h1>{score}</h1>
          <h5>Total Score</h5>
        </Score>
    )
}

export default TotalScore;

const Score = styled.div`

  h1{
    font-size: 80px;
    line-height: 100px;
  }

  h5{
    font-size: 24px;
  }
  `