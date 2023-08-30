import styled from "styled-components";
import Award from "./svg/Award";

export const MainContainer = styled.div`
  // font-family: "SF Pro Display", sans-serif;
`;

export const ProfileCardContainer = styled.div`
  display: flex;
  margin-left: 271px;
  margin-top: 100px;
  padding: 20px;

  width: 1100px;
  height: 154px;
  flex-shrink: 0;

  fill: #fff;
  stroke-width: 1px;
  stroke: var(--grey-t-85, #e4e7ea);
  filter: drop-shadow(0px 5px 10px rgba(0, 72, 124, 0.06));

  border-radius: 4px 4px 0px 0px;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
  box-sizing: border-box;
`;

export const ProfileSubContainer = styled(ProfileCardContainer)`
  margin-top: 0px;
  border-top: none;
  width: 550px;
  height: 82px;
  border-radius: 0px 0px 0px 4px;
`;

export const ProfileSubContainer2 = styled(ProfileCardContainer)`
  margin-top: 0px;
  border-top: none;
  border-left: none;
  width: 550px;
  height: 82px;
  border-radius: 0px 0px 4px 0px;
  margin-left: 0px;
`;
export const RankSearchDivider = styled.div`
  display: flex;
`;

export const ProfPicBorder = styled.div`
  width: 114px;
  height: 114px;
  flex-shrink: 0;

  fill: #fff;
  stroke-width: 1px;
  stroke: var(--grey-t-85, #e4e7ea);
  filter: drop-shadow(0px 5px 10px rgba(0, 72, 124, 0.06));

  border-radius: 50%;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;

  padding: 3px;
  box-sizing: border-box;
  z-index: -1;
`;

export const ImageDiv = styled.img`
  width: 106.083px;
  height: 106.083px;
  flex-shrink: 0;

  border-radius: 106.083px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1) inset;
  // z-index: -1;
`;

export const ProfName = styled.p`
  color: var(--blue-100, #1b63a9);
  font-family: SF Pro Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 8px 0px 0px 14px;
`;

export const RoleName = styled.p`
  color: var(--grey-100, #485c72);
  font-family: SF Pro Display;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 6px 0px 0px 14px;
`;

export const RatingText = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 29px;
  height: 25px;

  border-radius: 4px;
  background: var(--blue-100, #1b63a9);

  color: #fff;
  text-align: center;
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 18px 0px 0px 14px;
`;

export const StarDiv = styled.div`
  display: flex;
  gap: 4px;
  margin: 0px 0px 0px 8px;
`;

export const ReviewCount = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 0px 0px 6px;
`;
export const PlaceDivision = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 438px;
  margin-top: 0px;
`;

export const PlaceSubDivision = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 15px 0px;
`;

export const LocationFont = styled.div`
  color: var(--grey-t-35, #8895a3);
  text-align: right;
  font-family: SF Pro Display;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LocationName = styled.div`
  color: var(--grey-100, #485c72);
  font-family: SF Pro Display;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-left: 4px;
`;
export const CountBox = styled.div`
  display: inline-flex;
  height: 18px;
  margin-left: 2px;
  width: 22px;
  padding: 4px 10px 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: var(--blue-100, #1b63a9);
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-variant: all-small-caps;

  border-radius: 2px;
  border: 1px solid var(--blue-t-65, #afc8e1);
  background: var(--blue-t-92, #edf3f8);

  box-sizing: border-box;
`;

export const LabelDiv = styled.div`
  width: 84px;
  height: 19px;
  flex-shrink: 0;
  margin-left: 15px;
  margin-top: -18px;
  z-index: 2;
  position: relative;
`;
export const LabelText = styled.p`
  width: 52px;
  color: #fff;
  text-align: center;
  font-family: SF Pro Display;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px; /* 118.182% */
  letter-spacing: 0.44px;
  margin-top: -19px;
  margin-left: 15px;
`;

export const SeparatorLine = styled.div`
  width: 1100px;
  height: 1px;
  flex-shrink: 0;

  border-top: 1px solid var(--blue-t-65, #afc8e1);
`;

export const AwardBorder = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  fill: #f1f1ff;
  stroke-width: 1px;
  stroke: #d9d0eb;
  padding-left: 10px;
`;

export const SearchBorder = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  fill: #e6fafc;
  stroke-width: 1px;
  stroke: #cae3e5;
  padding-left: 10px;
`;

export const AwardLogo = styled.div`
  margin-top: -36px;
  margin-left: 10px;
`;

export const SearchLogo = styled.div`
  margin-top: -36px;
  margin-left: 10px;
`;

export const RankFont = styled.p`
  color: #5f3ea4;
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0px 0px 0px 10px;
`;
export const SearchFont = styled(RankFont)`
  color: #068085;
`;

export const RankText = styled.p`
  width: 402px;
  color: var(--grey-100, #485c72);
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 6px 0px 0px 10px;
`;
