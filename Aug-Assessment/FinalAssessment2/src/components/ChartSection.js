import React from "react";
import {
  BodyDiv,
  ChartHeader,
  ChartLayout,
  FlexColumn,
  Footer,
  FooterFontDiv,
  HeaderFont,
  PeriodNav,
  PeriodText,
  PeriodTextBlue,
  UnderLineDiv,
} from "../styles/ChartStyle";
import { Graph } from "./Graph";
import { useState } from "react";
import BlueStar from "../svg/BlueStar";
import { BlueStarDiv, RankNumFooter } from "../styles/ChartStyle";
import {
  FooterFontBottom,
  FooterFontPercent,
  FooterFontTop,
} from "../styles/RankStyle";
import UnderLine from "../svg/UnderLine";
const ChartSection = () => {
  const [userData, setUserData] = useState({
    labels: [
      "01 Feb",
      "03 Feb",
      "06 Feb",
      "09 Feb",
      "12 Feb",
      "15 Feb",
      "18 Feb",
      "21 Feb",
      "24 Feb",
      "27 Feb",
    ],
    datasets: [
      {
        label: "dataValue",
        tension: 0.1,
        axis: "y",
        data: [300, 250, 245, 240, 220, 210, 205, 200, 190, 180, 145, 100, 50],
        borderColor: "#3D7AB6",
        backgroundColor: "rgb(240,245,254)",
      },
    ],
  });
  return (
    <div>
      {" "}
      <ChartHeader>
        <HeaderFont>Rank Overview</HeaderFont>
        <PeriodNav>
          <PeriodText>Week</PeriodText>
          <FlexColumn>
            <PeriodTextBlue>Month</PeriodTextBlue>
            <UnderLineDiv>
              <UnderLine />
            </UnderLineDiv>
          </FlexColumn>
          <PeriodText>Quarter</PeriodText>
          <PeriodText>Year</PeriodText>
        </PeriodNav>
      </ChartHeader>
      <ChartLayout>
        <BodyDiv>
          <Graph chartData={userData} />
        </BodyDiv>
      </ChartLayout>
      <Footer>
        <BlueStarDiv>
          <BlueStar />
        </BlueStarDiv>
        <div>
          <RankNumFooter>156</RankNumFooter>
          <FooterFontDiv>
            <FooterFontTop>
              You are in top <FooterFontPercent>5%</FooterFontPercent>
              <FooterFontBottom>
                You are ranked 156 of 2,612 Mortgage loan officers in zip code
                37013.
              </FooterFontBottom>
            </FooterFontTop>
          </FooterFontDiv>
        </div>
      </Footer>
    </div>
  );
};
export default ChartSection;
