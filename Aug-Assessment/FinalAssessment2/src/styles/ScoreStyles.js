import styled from "styled-components";

export const ScoreCard = styled.div`
  width: 1100px;
  height: 372px;
  flex-shrink: 0;

  fill: #fff;
  stroke-width: 1px;
  stroke: var(--grey-t-85, #e4e7ea);
  filter: drop-shadow(0px 5px 10px rgba(0, 72, 124, 0.06));

  border-radius: 4px;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);

  margin-top: 30px;
  margin-left: 271px;
  padding: 19px 20px 20px 20px;
  box-sizing: border-box;
`;

export const XpLogoBorder = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  fill: var(--blue-t-92, #edf3f8);
  background: var(--blue-t-92, #edf3f8);
  padding: 3px 4px 4px 3px;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const ScoreText = styled.div`
  color: var(--grey-100, #485c72);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.36px;
  margin-left: 7px;
`;

export const ScoreNum = styled.div`
  color: var(--blue-s-30, #134576);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.36px;
  margin-left: 4px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchFont = styled.div`
  color: var(--grey-t-15, #637487);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 112.908px;

  margin-top: 23px;
`;

export const ScoreNumLarge = styled.div`
  color: var(--blue-s-20, #164f87);

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-right: 4px;
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubHeaderFlex = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ScoreColor = styled.div`
  height: 20px;
  margin-top: 9px;
  border-radius: 3px;
  background: var(--grey-t-85, #e4e7ea);
  display: flex;
`;
export const GreenBar = styled.div`
  width: 348.02px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 1.98px;
  border-radius: 3px;
  background: #68ad10;
`;

export const BlueBar = styled.div`
  width: 189px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #295fbe;
  margin-right: 1.98px;
`;

export const PinkBar = styled.div`
  width: 165px;
  height: 20px;
  flex-shrink: 0;

  border-radius: 3px;
  background: #9924f0;
  margin-right: 1.98px;
`;

export const CyanBar = styled.div`
  width: 134px;
  height: 20px;
  flex-shrink: 0;

  border-radius: 3px;
  background: #02afbb;
  margin-right: 1.98px;
`;

export const GreenDot = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;

  border-radius: 5px;
  background: #68ad10;
  margin-right: 10px;
`;

export const Legends = styled.div`
  display: flex;
  margin-top: 13px;
  align-items: baseline;
`;

export const BlueDot = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;

  border-radius: 5px;
  background: #295fbe;
  margin-right: 10px;
`;

export const PinkDot = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;

  border-radius: 5px;
  background: #9924f0;
  margin-right: 10px;
`;

export const CyanDot = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;

  border-radius: 5px;
  background: #0dc1cd;
  margin-right: 10px;
`;

export const LegendFont = styled.div`
  color: var(--grey-t-15, #637487);

  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 40px;
`;

export const NoteTitle = styled.span`
  color: var(--grey-100, #485c72);

  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NoteFont = styled.span`
  color: var(--grey-100, #485c72);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Note = styled.div`
  margin-top: 30px;
`;
export const MiniCardsLayout = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const MiniCard = styled.div`
  width: 250px;
  height: 118px;
  flex-shrink: 0;

  background: var(--blue-t-98, #fafcfd);
  border: 1px solid var(--blue-t-35, #6b9ac7);
  fill: var(--blue-t-98, #fafcfd);
  stroke-width: 1px;
  stroke: var(--blue-t-35, #6b9ac7);
  border-radius: 3px;
  filter: drop-shadow(0px 5px 10px rgba(0, 72, 124, 0.06));
  padding: 20px;
  box-sizing: border-box;
  margin-right: 20px;
`;
export const MiniCardFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MiniCardFlex2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const MiniCardTitle = styled.div`
  color: var(--grey-s-30, #324050);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ChevronRightBorder = styled.div`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--grey-t-85, #e4e7ea);
  background: #fff;
  padding: 3px 0.3px 3px 1px;

  box-sizing: border-box;
`;

export const MiniCardFontNum = styled.div`
  color: var(--blue-s-30, #134576);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 4px;
`;

export const MiniCardText = styled.div`
  color: var(--grey-t-15, #637487);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-right: 4px;
`;

export const MiniCardNumLight = styled.div`
  color: var(--grey-t-15, #637487);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-right: 4px;
`;

export const GreenProgressDiv = styled.div`
  width: 210px;
  height: 6px;
  flex-shrink: 0;
  margin-top: 1px;
`;
