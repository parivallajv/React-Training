import { LearnMoreLinkAudience,  LeftDivision, Paragraph, RightDivision, SubTitle ,Image, MainDivisionAudience} from "../sunny-styles";
import PinkCup from "../images/desktop/image-stand-out.jpg";

const Audience = () => {
    return ( 
    <MainDivisionAudience>
        <LeftDivision>
          <Image src={PinkCup} alt="Pink-cup" />
        </LeftDivision>
        <RightDivision>
          <SubTitle>Stand out to the right audience</SubTitle>
          <Paragraph>
            Using a collaborative formula of desingers, researchers,
            photographers, videographers,and copywriters,we'll build and extend
            your brand in digital places
          </Paragraph>
          <LearnMoreLinkAudience>LEARN MORE</LearnMoreLinkAudience>
        </RightDivision>
      </MainDivisionAudience>
       );
}
 
export default Audience;