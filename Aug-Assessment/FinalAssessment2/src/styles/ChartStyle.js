import styled from "styled-components";

export const ChartLayout = styled.div`
  width: 744px;
  height: 315px;
  flex-shrink: 0;

  border-radius: 0px 0px 0px 0px;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
  margin-left: 270px;

  &: > canvas {
    height: 255px;
  }
`;

export const HeaderFont = styled.div`
  color: var(--grey-s-30, #324050);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-top: 22px;
  margin-left: 19.98px;
`;

export const PeriodNav = styled.div`
  display: flex;
  margin-left: 409.2px;
  margin-right: 24.88px;
  margin-top: -11px;
  justify-content: space-between;
`;

export const PeriodText = styled.div`
  color: var(--grey-t-35, #8895a3);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PeriodTextBlue = styled.div`
  color: var(--Blue-100, #1b63a9);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ChartHeader = styled.div`
  width: 744px;
  height: 66px;
  flex-shrink: 0;

  border-radius: 4px 4px 0px 0px;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
  margin-top: 30px;
  margin-left: 270px;
`;

export const Footer = styled.div`
  width: 744.042px;
  height: 125px;
  flex-shrink: 0;

  display: flex;

  border-radius: 0px 0px 4px 4px;
  top-border: none;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
  margin-left: 270px;

  box-sizing: border-box;
`;

export const BodyDiv = styled.div`
  height: 90%;
  width: 75%;
  margin: 20px auto;
  & > canvas {
    width: 100%;
  }
`;

export const GraphDiv = styled.div`
  // height: 250px;
`;

export const RankNumFooter = styled.div`
  color: var(--Blue-S-50, #0d3155);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-top: 29px;
  margin-left: 14.68px;
`;

export const BlueStarDiv = styled.div`
  margin-top: 37px;
  margin-left: 29.39px;
`;

export const FooterFontDiv = styled.div`
  width: 418.011px;
`;

export const UnderLineDiv = styled.div`
  margin-top: 4px;
`;
