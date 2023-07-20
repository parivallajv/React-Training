import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";
import { colorObj } from "./starObject";
import { Div, H2 } from "./starStyle";
import { useState } from "react";

const Star = () => {
  const [clr, setClr] = useState("");

  const RatingStar = styled(AiFillStar)`
    fill: ${(props) => (props?.clr ? props.clr : "black")};
    x:0;
    x:20%;
    y:0;
    y:20%;
    width: 150px;
    height: 150px;
  `;

  return (
    <Div>
      <H2>FeedBack Form</H2>
      {colorObj.map((data) => {
        return (
          <RatingStar
            onClick={() => {
              setClr(data.color);
              console.log(data);
            }}
            key={data.id}
            clr={clr}
          ></RatingStar>
        );
      })}
    </Div>
  );
};
export default Star;
