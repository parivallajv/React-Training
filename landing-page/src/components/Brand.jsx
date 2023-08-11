import {  LearnMoreLinkBrand, LeftDivision, MainDivision, Paragraph, RightDivision, SubTitle,Image, MainDivisionBrand } from "../sunny-styles";
import EggImage from "../images/desktop/image-transform.jpg";

const Brand = () => {
    return (<MainDivisionBrand>
        <LeftDivision>
          <SubTitle>Transform your brand</SubTitle>
          <Paragraph>
            We are a full service creative agency specializing in helping brands
            grow fast.Engage your clients through compelling visuals that do
            most of the marketing for you.{" "}
          </Paragraph>
          <LearnMoreLinkBrand>LEARN MORE</LearnMoreLinkBrand>
        </LeftDivision>
        <RightDivision>
          <Image src={EggImage} alt="egg-transform" />
        </RightDivision>
      </MainDivisionBrand>  );
}
 
export default Brand;