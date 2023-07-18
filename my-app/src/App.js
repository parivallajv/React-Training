// import logo from "./logo.svg";
import "./App.css";
// import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";

const BigStar = styled(AiFillStar)`
font-size: 100px;
text-align: center;
color: yellow
`;

export const FeedbackTitle = styled.h1`
  margin-top: 200px;
  font-size: 30px;
`;

export function changeColor(props){
  console.log(props);
 
    
}

function App() {

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

  

  return (
    <div className="App">
      <FeedbackTitle>Feedback here...</FeedbackTitle>
      <div>
        {
          sample.map(data=><BigStar onClick={changeColor}></BigStar>)
        }
        
      </div>
    </div>
  );
}

export default App;
