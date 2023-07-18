import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";

export const BigStar = styled(AiFillStar)`
  font-size: 100px;
  text-align: center;
  color: ${(props) =>
    (props.starTwo === true ? "#CF0812" : null) ||
    (props.starOne === true ? "#CF0812" : null) ||
    (props.starThree === true ? "#FAAD14" : null) ||
    (props.starFour === true ? "#85BA6A" : null) ||
    (props.starFive === true ? "#013220" : null)};
  cursor: pointer;
`;

export const FeedbackTitle = styled.h1`
  margin-top: 200px;
  font-size: 30px;
`;

function App() {
  const [starOne, setOne] = useState(false);
  const [starTwo, setTwo] = useState(false);
  const [starThree, setThree] = useState(false);
  const [starFour, setFour] = useState(false);
  const [starFive, setFive] = useState(false);

  const sample = [
    {
      value: 1,
      color: "#CF0812",
    },
    {
      value: 2,
      color: "#CF0812",
    },
    {
      value: 3,
      color: "#FAAD14",
    },
    {
      value: 4,
      color: "#85BA6A",
    },
    {
      value: 5,
      color: "#013220",
    },
  ];
  sample.forEach(data=>{
    return 
    <BigStar>1</BigStar>
  })
 

  return (
    <div className="App">
      <FeedbackTitle>Feedback here...</FeedbackTitle>
      <div>
        
        
      </div>
    </div>
  );
}

export default App;
