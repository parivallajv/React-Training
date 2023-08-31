import styled from "styled-components";

export const RankHeader = styled.div`
  width: 334px;
  height: 66px;
  flex-shrink: 0;

  border-radius: 3px;
  border: 1px solid var(--Grey-T-85, #e4e7ea);
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);

  margin-top: 30px;
  margin-left: 20px;
`;

export const RankMiniCard = styled.div`
  width: 334px;
  height: 104px;
  flex-shrink: 0;

  display: flex;
`;

export const RankMiniCardBg = styled.div`
  width: 334px;
  height: 104px;
  flex-shrink: 0;
  display: flex;
  border-top: 1px solid var(--Blue-T-85, #dde8f2);
  border-bottom: 1px solid var(--Blue-T-85, #dde8f2);
  background: var(--Blue-T-96, #f6f9fc);
`;

export const HeaderFont = styled.div`
  margin-top: 21px;
  margin-left: 28px;

  color: var(--Grey-S-30, #324050);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.36px;
`;

export const RankContainer = styled.div`
  width: 336px;
  height: 440px;
  flex-shrink: 0;
  margin-left: 20px;

  border-radius: 3px;
  border: 1px solid var(--Grey-T-85, #e4e7ea);
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
`;

export const RankNum = styled.div`
  margin-top: 40px;
  margin-left: 18px;

  color: var(--Grey-T-25, #768595);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: 0.28px;
`;

export const PhotoBorder = styled.div`
  width: 66px;
  height: 66px;
  flex-shrink: 0;

  background: #fff;
  border: 1px solid var(--Grey-T-85, #e4e7ea);

  border-radius: 50%;
  box-sizing: border-box;
  padding: 2px;

  margin-top: 16px;
  margin-left: 10px;
`;

export const PhotoTag = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;

  border-radius: 50%;
`;

export const NameFont = styled.div`
  margin-top: 16px;
  margin-left: 10px;

  color: var(--Grey-S-50, #242e39);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RoleFont = styled.div`
  margin-top: 2px;
  margin-left: 10px;

  color: var(--Grey-T-25, #768595);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ScoreDiv = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background: var(--Blue-100, #1b63a9);

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  box-sizing: border-box;

  margin-top: 8px;
  margin-left: 10px;

  width: 29px;
  height: 25px;
`;

export const StarSmDiv = styled.div`
  display: flex;
  margin-left: 8px;
  margin-top: 10.5px;
  gap: 2px;
`;

export const ScoreFlex = styled.div`
  display: flex;
`;

export const ReviewsCount = styled.div`
  color: var(--Grey-T-15, #637487);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 14px;
  margin-left: 6px;
`;

export const FlagSmDiv = styled.div`
  margin-top: -17px;
  margin-left: 6px;
`;

export const RankFontSm = styled.div`
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.4px;

  margin-top: -13px;
  margin-left: 11px;
`;

export const FooterFontTop = styled.span`
  color: var(--Grey-S-10, #415367);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: 0.28px;

  margin-top: 5px;
  margin-left: 14.68px;
`;

export const FooterFontPercent = styled.span`
  color: #185998;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.28px;
`;

export const FooterFontBottom = styled.div`
  color: var(--Grey-T-15, #637487);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.28px;

  margin-left: 14.68px;
`;
