import { Rate } from "antd";
import styled from "styled-components";
import ActionsLogo from "./svg/ActionsLogo";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "SF Pro Display", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  height: 14px;
  margin-right: 100px;
  margin-left: 25px;
  & > div {
    margin-right: 0px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 42px;
  background: #e4e7ea;
`;
export const HeaderFont = styled.p`
  font-family: SF Pro Display;
  font-size: 18px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  color: #3a4a5b;
  background: #e4e7ea;
  padding-left: 19.98px;
  height: 42px;
  margin: 0;
`;

export const HeaderActions = styled.div`
  padding-right: 19.98px;
  opacity: 0.3;
`;

export const StyledSliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AlignCenter = styled.div`
  align-items: center;
  margin-left: 50%;
`;

export const AlignCenterDate = styled.div`
  align-items: center;
  margin-left: 2%;
`;

export const SortLogoDiv = styled.div`
  margin-left: 10px;
`;

export const ColumnTitle = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: center;
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

export const ColumnName2 = styled(ColumnName1)`
  font-family: SF Pro Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #637487;
  // margin-left: 30px;
`;

export const StarRate = styled(Rate)`
  color: #1b63a9;
  height: 12px;
`;

export const StarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

export const StarText = styled.div`
  margin-left: 10px;
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
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #1b63a9;
  height: 34px;
  margin-left: 10px;
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
