import styled from "styled-components";
import { Divider, Input } from "antd";
import { Person1 } from "../src/Images/person-1.png";
import EllipseBorder from "./svg/EllipseBorder";
import LeftArrow from "./svg/LeftArrow";
import LeftXpShadow from "./svg/LeftXpShadow";
import EditCircleOuter from "./svg/EditCircleOuter";

export const LogoDivision = styled.div`
  margin-left: 130px;
  margin-top: 60px;
`;

export const HeaderDivision = styled.div`
  width: 412px;
  margin-left: 130px;
  margin-top: 70px;
`;
export const HeaderFont = styled.span`
  color: var(--grey-s-30, #324050);
  //  
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 108.333% */
`;

export const GreyHighLighter = styled.span`
  color: var(--grey-t-35, #8895a3);
  //  
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;

export const SearchInput = styled(Input)`
  display: flex;
  width: 412px;
  height: 32px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 5px 10px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-radius: 3px;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: var(--grey-grey-1, #fff);
  margin-left: 130px;
  margin-top: 30px;

  color: var(--grey-t-50, #a3adb8);

  /* Regular / 14px | 22px */
   
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export const CardLayout = styled.div`
  width: 412px;
  height: 162px;
  flex-shrink: 0;
  margin-left: 130px;
  margin-top: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid var(--blue-t-35, #6b9ac7);
  background: ${(props) => props.bgColor};
  padding: 27px 19.48px;
`;

export const ImageDivision = styled.image`
  width: 98.182px;
  height: 98.182px;
  flex-shrink: 0;

  border-radius: 98.182px;
  background: url(), lightgray 50% / cover no-repeat;
`;

export const NameFont = styled.p`
  color: var(--blue-100, #1b63a9);
  //  
  font-size: 18px;
  margin-top: -7px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LeftDivision = styled.div`
  width: 129px;
  float: left;
`;
export const RightDivision = styled.div`
  float: left;
`;

export const RoleNameFont = styled.p`
  color: var(--grey-100, #485c72);
  margin-top: -12px;
  margin-bottom: 0px;
   
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const PlaceLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const PlaceTitle = styled.span`
  margin-top: 9px;
  color: var(--grey-t-35, #8895a3);
   
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PlaceAnswer = styled.span`
  color: var(--grey-100, #485c72);
   
  margin-top: 9px;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EmailDivision = styled.div``;
export const EmailFont = styled.p`
  color: var(--grey-100, #485c72);
  margin-top: 10px;
   
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LoadMoreFont = styled.p`
  width: 53px;

  color: var(--blue-100, #1b63a9);
  text-align: center;
   
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  // margin: 0;
`;

export const LoadMoreDivision = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  margin-left: 130px;
  width: 412px;
`;

export const ClaimBoxLayout = styled.div`
  display: flex;
  margin-left: 130px;
  margin-top: 30px;
  width: 412px;
  padding: 12px 30px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  border: 1px solid var(--grey-t-75, #d1d6dc);
`;

export const ClaimBoxFont = styled.p`
  color: var(--blue-100, #1b63a9);
   
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const ImageDiv = styled.img`
  width: 98.182px;
  height: 98.182px;
  flex-shrink: 0;

  border-radius: 98.182px;
  background: url("./Images/person-1.png"), lightgray 50% / cover no-repeat;
`;

export const SeparatorDiv = styled.div`
  width: 412px;
  margin: 0;
  margin-left: 130px;
  margin-top: 25px;
  gap: 8px;
  height: 17px;

  display: flex;
  align-items: center;
`;

export const SeparatorText = styled.p`
  color: var(--grey-t-15, #637487);
  width: 19.507px;
  text-align: center;
   
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CreateProfileDiv = styled.div`
  margin-left: 130px;
  margin-top: 30px;

  display: flex;
  width: 412px;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;

  border-radius: 3px;
  background: #275f98;

  color: #fff;
   
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  width: 20px;
  height: 40px;
  margin-left: 316px;
  margin-top: 30px;
`;

export const LeftArrowDiv = styled.div`
  position: absolute;
  width: 20px;
  height: 40px;
  margin-left: 324px;
  margin-top: 38px;
`;

export const RightBanner = styled.div`
  width: 808px;
  height: 802px;
  flex-shrink: 0;
  position: absolute;

  background: var(--blue-t-96, #f6f9fc);
  margin-left: 111px;
  margin-top: 0px;
  box-sizing: border-box;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  overflow:hidden;
  box-sizing: border-box;
  font-family: 'SF Pro Display', sans-serif;
`;

export const SpringLayout = styled.div`
  width: 56.592px;
  height: 126.995px;
  // transform: rotate(-28.182deg);
  flex-shrink: 0;

  position: relative;
  top: 74px;
  left: 50px;

  fill: var(--blue-100, #1b63a9);
  opacity: 0.3;
`;

export const StarDiv = styled.div`
  width: 14.199px;
  height: 13.655px;
  flex-shrink: 0;

  fill: var(--blue-t-15, #3d7ab6);
  opacity: 0.3;

  position: absolute;
  top: 138.01px;
  // left: 79.66px;
  right: 699.14px;
`;

export const BrowserBorderDiv = styled.div`
  width: 363.5px;
  height: 383px;
  flex-shrink: 0;

  stroke-width: 3px;
  stroke: var(--blue-t-85, #dde8f2);

  position: absolute;
  top: 157px;
  right: 256.5px;
`;

export const DotEllipseDiv = styled.div`
  position: absolute;
  top: 176px;
  right: 549px;
  gap: 7px;
  display: flex;
`;

export const BrowserDivContainer = styled.div`
  position: absolute;
  top: 195.5px;
  right: 278.5px;
  width: 338.5px;
  height: 0px;
  flex-shrink: 0;
  stroke-width: 3px;
  stroke: var(--blue-t-85, #dde8f2);
`;

export const LogoDivisionSmall = styled.div`
  width: 143px;
  height: 20.515px;
  flex-shrink: 0;

  position: absolute;
  top: 237px;
  right: 439px;

  box-sizing: border-box;
`;

export const AgentCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 296px;
  height: 106px;
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 9px 20px 0px rgba(99, 116, 135, 0.1);

  box-sizing: border-box;

  position: absolute;
  top: 295px;
  right: 273px;
`;

export const AgentImage = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 14px 0px rgba(150, 150, 150, 0.14) inset;
`;

export const AgentName = styled.p`
  color: var(--grey-s-50, #242e39);
  //  
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  position: absolute;
  top: 17px;
  left: 106px;
`;

export const AgentRole = styled.p`
  color: var(--grey-t-65, #bfc6ce);
  text-align: left;
  //  
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.12px;

  position: absolute;
  top: 44px;
  right: 160px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DownArrowDiv = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  position: relative;
  top: 12px;
  right: 0px;
`;

export const ReviewCard = styled.div`
  width: 368px;
  height: 140px;
  flex-shrink: 0;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 9px 20px 0px rgba(99, 116, 135, 0.1);

  position: absolute;
  top: 430px;
  right: 181px;
  padding: 21px 30px 23px 20px;
  box-sizing: border-box;
  z-index:2;
`;

export const LetterAvatar = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;

  fill: #24a7df;
`;

export const SLetter = styled.p`
  color: var(--blue-t-98, #fafcfd);
  //  
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  position: absolute;
  top: 15px;
  right: 326px;
`;

export const UserName = styled.p`
  color: var(--grey-s-50, #242e39);
  //  
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  position: absolute;
  top: 21px;
  left: 67px;
  margin: 0px;
`;

export const UserLocation = styled.p`
  color: var(--grey-s-50, #242e39);
  //  
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  opacity: 0.45;

  position: absolute;
  top: 28px;
  left: 67px;
`;

export const ReviewFont = styled.p`
  color: var(--grey-s-50, #242e39);
  //  
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.32px;

  width: 318px;

  position: absolute;
  top: 55px;
`;

export const EditCircleOuterSt = styled.div`
  position: absolute;
  top: 396px;
  right: 165px;

  width: 97px;
  height: 97px;
  flex-shrink: 0;
  // padding: 22px;

  box-sizing: border-box;

  fill: #fff;
  filter: drop-shadow(0px 9px 20px rgba(99, 116, 135, 0.1));
  z-index:2;
`;

export const EditCircleInnerSt = styled.div`
  position: absolute;
  top: 429px;
  right: 167px;

  // width: 53px;
  // height: 53px;
  flex-shrink: 0;

  box-sizing: border-box;

  fill: var(--blue-t-96, #f6f9fc);
  z-index:2;
`;

export const EditLogoDiv = styled.div`
  width: 18px;
  height: 18px;
  flex-shrink: 0;

  position: absolute;
  top: 446px;
  right: 184px;
  z-index: 2;
`;

export const RightXpShadowDiv = styled.div`
  width: 682px;
  height: 1051px;
  flex-shrink: 0;

  fill: conic-gradient(
    from -41deg at 50% 50%,
    rgba(224, 240, 255, 0) 0deg,
    #e0f0ff 266.2499928474426deg
  );

  position: absolute;
  top: 0px;
  left: 543px;

  box-sizing: border-box;
  z-index: 1;
`;
export const XpShadowLayout = styled.div`
  width: 608px;
  height: 944px;
  flex-shrink: 0;
  fill: conic-gradient(
    from -41deg at 50% 50%,
    rgba(224, 240, 255, 0) 0deg,
    #e0f0ff 266.2499928474426deg
  );
  position: absolute;
  top: 0px;
  right: 33px;
`;
