import { LeftDivisionWithText, MainDivision, ParagraphForCherry, RightDivisionWithText, SubTitleForCherry } from "../sunny-styles";

const Fruits = () => {
    return ( <MainDivision>
        <LeftDivisionWithText>
          <SubTitleForCherry>Graphic Design</SubTitleForCherry>
          <ParagraphForCherry>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention
          </ParagraphForCherry>
        </LeftDivisionWithText>
        <RightDivisionWithText>
          <SubTitleForCherry>Photography</SubTitleForCherry>
          <ParagraphForCherry>
            Increasing the credibility by getting the most stunning, high
            quality photos that improves your business image
          </ParagraphForCherry>
        </RightDivisionWithText>
      </MainDivision> );
}
 
export default Fruits;