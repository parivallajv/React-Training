import { ArrowContainer, LeftArrowDiv } from "../../styles";
import LeftArrow from "../../svg/LeftArrow";
import LeftArrowBorder from "../../svg/LeftArrowBorder";

const BackBtn = () => {
  return (
    <div>
      <ArrowContainer>
        <LeftArrowBorder />
      </ArrowContainer>
      <LeftArrowDiv>
        <LeftArrow />
      </LeftArrowDiv>
    </div>
  );
};

export default BackBtn;
