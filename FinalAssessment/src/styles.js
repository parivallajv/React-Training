import styled from "styled-components";
import { Input } from "antd";
import { Person1 } from "../src/Images/person-1.png";
import EllipseBorder from "./svg/EllipseBorder";

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
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 108.333% */
`;

export const GreyHighLighter = styled.span`
  color: var(--grey-t-35, #8895a3);
  font-family: SF Pro Display;
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
  font-family: SF Pro Display;
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
  background: var(--blue-t-98, #fafcfd);
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
  font-family: SF Pro Display;
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
  font-family: SF Pro Display;
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
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PlaceAnswer = styled.span`
  color: var(--grey-100, #485c72);
  font-family: SF Pro Display;
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
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LoadMoreFont = styled.p`
  width: 53px;

  color: var(--blue-100, #1b63a9);
  text-align: center;
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 0;
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
  box-sizing:border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  border: 1px solid var(--grey-t-75, #d1d6dc);
`;

export const ClaimBoxFont = styled.p`
  color: var(--blue-100, #1b63a9);
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin:0;
`;
