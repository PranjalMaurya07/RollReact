import React from "react";
import styled from "styled-components";

const NumberSelector = ({error,setError,selected,setSelected}) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];

    const NumberSelectorHandler = (value) => {
        setSelected(value);
        setError("")
    }

    return (
        <Numbercontainer>
            <p className="error">{error}</p>
            <div className="numbers_list">
                {arrNumber.map((value, i) =>
                    <Box isSelected={selected === value} key={i} onClick={() => NumberSelectorHandler(value)}>{value}</Box>
                )}
            </div>
            <h5>Select Number</h5>
        </Numbercontainer>
    )
}

export default NumberSelector;

const Numbercontainer = styled.div`

    .error{
        color: red;
        margin-left: 95px;
        margin-bottom: 5px;
    }

    .numbers_list{
        display: flex;
        gap: 20px;
    }
    h5{
        font-size: 24px;
        position: absolute;
        top: 123px;
        left: 1065px;
    }
`

const Box = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;

  background-color: ${(props) => props.isSelected ? "black" : "white"};
  color: ${(props) => !props.isSelected ? "black" : "white"};

`