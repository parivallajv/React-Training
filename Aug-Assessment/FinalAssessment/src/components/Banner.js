import {
  AgentCard,
  AgentImage,
  AgentName,
  AgentRole,
  BrowserBorderDiv,
  BrowserDivContainer,
  DotEllipseDiv,
  DownArrowDiv,
  CircleInnerSt,
  EditCircleOuterSt,
  EditLogoDiv,
  FlexColumn,
  LogoDivisionSmall,
  ReviewCard,
  ReviewFont,
  RightBanner,
  RightXpShadowDiv,
  SLetter,
  SpringLayout,
  StarDiv,
  UserLocation,
  UserName,
  XpShadowLayout,
} from "../styles.js";
import BrowserBorder from "../svg/BrowserBorder.js";
import BrowserDivider from "../svg/BrowserDivider";
import DotEllipse from "../svg/DotEllipse";
import ExperienceLogoSmall from "../svg/ExperienceLogoSmall";
import Spring from "../svg/Spring";
import Star from "../svg/Star";
import LeftXpShadow from "../svg/LeftXpShadow";
import AgentImg from "../Images/Agent-Image.png";
import DownArrow from "../svg/DownArrow";
import AvatarBorder from "../svg/AvatarBorder";
import EditCircleOuter from "../svg/EditCircleOuter";
import EditCircleInner from "../svg/EditCircleInner";
import EditLogo from "../svg/EditLogo";
import RightXpShadow from "../svg/RightXpShadow";
import ReviewSection from "./BannerSection/ReviewSection.js";

const Banner = () => {
  return (
    <div>
      <RightBanner>
        <SpringLayout>
          <Spring />
        </SpringLayout>
        <StarDiv>
          <Star />
        </StarDiv>
        <BrowserBorderDiv>
          <BrowserBorder />
        </BrowserBorderDiv>
        <DotEllipseDiv>
          <DotEllipse />
          <DotEllipse />
          <DotEllipse />
        </DotEllipseDiv>
        <BrowserDivContainer>
          <BrowserDivider />
        </BrowserDivContainer>
        <LogoDivisionSmall>
          <ExperienceLogoSmall />
        </LogoDivisionSmall>
        <XpShadowLayout>
          <LeftXpShadow />
        </XpShadowLayout>
        <RightXpShadowDiv>
          <RightXpShadow />
        </RightXpShadowDiv>
        <AgentCard>
          <AgentImage src={AgentImg} />
          <FlexColumn>
            <AgentName>Christopher Mc</AgentName>
            <AgentRole>Agent </AgentRole>
          </FlexColumn>
          <DownArrowDiv>
            <DownArrow />
          </DownArrowDiv>
        </AgentCard>

        <ReviewSection />
       
      </RightBanner>
    </div>
  );
};

export default Banner;
