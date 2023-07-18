import React, { useState } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 100vh;
  background-color: rgb(${(props)=>props?.bgR},${(props)=>props?.bgG},${(props)=>props?.bgB});
  /* background-color: rgb(255,100,100); */
`;

const SubDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [bgR, setR] = useState("");
  const [bgG, setG] = useState("");
  const [bgB, setB] = useState("");

  // const [change, setChange] = useState(false);

  return (
    <MainDiv  bgR={bgR} bgG={bgG} bgB={bgB}>
      <SubDiv>
        <input
          type="number"
          placeholder="RED"
          onChange={(e) => {
            // setChange(false);
            setR(e.target.value);
            
            
          }}
        />

        <input
          type="number" step={5}
          placeholder="GREEN"
          onChange={(e) => {
            
            // setChange(false);
            setG(e.target.value);
            
          }}
        />

        <input
          type="number"
          placeholder="YELLOWX`"
          onChange={(e) => {
            // setChange(false);
            setB(e.target.value);
            
          }}
        />

     {/* <button onClick={() => setChange(true)}>Change color</button> */}
        
      </SubDiv>
    </MainDiv>
  );
};

export default App;
