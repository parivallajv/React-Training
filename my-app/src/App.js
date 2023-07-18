// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";

const BigStar = styled(AiFillStar)`
  font-size: 100px;
  color: yellow;
`;

export const FeedbackTitle = styled.h1`
  margin-top: 200px;
  font-size: 30px;
`;

export function changeColor(props) {
  console.log(props);
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items-center;
flex-direction:row
`;

const Radio = styled.input`
  display: none;
`;

function App() {

  const [rating, setRating] = useState(0);
  const [color, setColor] = useState("");

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
      {sample.map((data, index) => {
        const Rating = index + 1;

        return (
          <div>
            <label>
              <Radio
                type="radio"
                value={Rating}
                onClick={() => {
                  setRating(Rating);
                  setColor(sample[Rating - 1].color);
                }}
              ></Radio>
              <Container>
                <BigStar
                  color={
                    Rating < rating || Rating === rating
                      ? `${color}`
                      : "#D8DFE1"
                  }
                ></BigStar>
              </Container>
              </label>
          </div>
        );
      })}
    </div>
  );
}

export default App;
