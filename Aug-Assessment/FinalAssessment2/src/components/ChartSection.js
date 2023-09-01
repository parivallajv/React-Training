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
      "",
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
        tension: 0,
        axis: "y",
        data: [300, 250, 245, 240, 220, 210, 205, 200, 190, 180, 145, 100, 50],
        // data:[250,100,145,180,190,200,205,210,220,240,245,250,300],
        // data: [100, 100, 100, 112, 122, 127, 140, 160, 190, 230, 270].reverse(),
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 2,
        backgroundColor: (colorSet) => {
          const bgColor = [
            "rgba(53, 162, 235,0.4)",
            "rgba(53, 162, 235,0.01)",
            "rgba(53, 162, 235,0)",
          ];
          if (!colorSet.chart.chartArea) {
            return;
          }
          const {
            ctx,
            data,
            chartArea: { bottom, top, left },
          } = colorSet.chart;
          const gradientBG = ctx.createLinearGradient(0, bottom, 0, top,0,left);
          gradientBG.addColorStop(0, bgColor[0]);
          gradientBG.addColorStop(1, bgColor[1]);
          gradientBG.addColorStop(1, bgColor[2]);
          return gradientBG;
        },
        fill: true,
        tension: 0,
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
