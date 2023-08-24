import { Rate } from "antd";
import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  font-family: "SF Pro Display", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  height: 14px;
  padding: 0px 0px 4px 9.94px;
  & > div {
    margin-right: 0px;
  }
`;

export const LogoDiv1 = styled.div`
  padding: 0px 5px 0px 0px;
`;

export const LogoDiv2 = styled.div`
  padding: 0px 10px 0px 0px;
`;

export const LogoDiv3 = styled.div`
  padding: 0px 0px 0px 10px;
`;

export const LogoDiv4 = styled.div`
  padding: 0px 0px 0px 5px;
`;
export const LogoDiv5 = styled.div`
  padding: 0px 0px 0px 0px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  background: #e4e7ea;
  flex-shrink: 0;
`;
export const HeaderFont = styled.p`
  padding: 11px 0px 10px 19.98px;
  color: #3a4a5b;
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 86.926px;
`;

export const HeaderActions = styled.div`
  padding: 13px 37.97px 13px 0px;
  opacity: 0.3;
  width: 15.986px;
  height: 16px;
  flex-shrink: 0;
`;

export const StyledSliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AlignCenter = styled.div`
  align-items: right;
  margin-left: 50%;
`;

export const AlignCenterDate = styled.div`
  align-items: center;
  margin-left: 2%;
`;

export const SortLogoDiv = styled.div`
  margin-left: 8px;
`;

export const ColumnTitle = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
`;

export const ColumnTitle1 = styled(ColumnTitle)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const CheckBoxSt = styled(ColumnTitle)`
  align-items: stretch;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActiveButton = styled.div`
  background: #f6fcf9;
  border: 1px solid #93d7af;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  width: 56px;
  height: 24px;
  padding: 6px 4px 0px 4px;
  color: var(--green-t-15, #47ba78);
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ColumnName1 = styled.div`
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #637487;
  margin-left: 10px;
`;

export const ColumnName2 = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 112.095px;
`;
export const ColumnName3 = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ColumnName4 = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ColumnName5 = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 92px;
`;
export const ColumnName6 = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 97.082px;
`;
export const ColumnName7 = styled.div`
  color: var(--grey-t-15, #637487);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 51.043px;
`;

export const StarRate = styled(Rate)`
  color: #1b63a9;
  height: 12px;
`;

export const StarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const StarText = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CampName = styled.div`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #1b63a9;
  margin-bottom: 15px;
  padding: 4px 0px 0px 9.94px;
`;

export const CampDesc = styled.div`
  color: var(--grey-t-25, #768595);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CampDescNo = styled.div`
  color: var(--blue-100, #1b63a9);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RateText = styled.div`
  color: var(--grey-s-50, #242e39);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // margin-left: 70%;
`;

export const DateStyle = styled.div`
  color: var(--grey-s-50, #242e39);
  text-align: center;
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProgressDiv = styled.div`
  width: 112px;
  height: 6px;
  text-align: center;
  align-items: center;
  margin-left: 20%;
`;

export const SingleStarDiv = styled.div`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
`;
