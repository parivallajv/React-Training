import { Progress, Slider, Table } from "antd";
import { useState } from "react";
import NameRow from "./NameRow";
import FullStar from "../svg/FullStar";
import HalfStar from "../svg/FullStar";
import EmptyStar from "../svg/EmptyStar";
import {
  ActiveButton,
  AlignCenter,
  AlignCenterDate,
  CampName,
  CheckBoxLogoDiv,
  CheckBoxSt,
  ColumnName,
  ColumnName1,
  ColumnName2,
  ColumnName3,
  ColumnName4,
  ColumnName5,
  ColumnName6,
  ColumnName7,
  ColumnTitle,
  ColumnTitle1,
  DateStyle,
  HeaderActions,
  HeaderDiv,
  HeaderFont,
  MainContainer,
  ProgressDiv,
  RateText,
  SingleStarDiv,
  SortLogoDiv,
  StarDiv,
  StarRate,
  StarText,
} from "../Styles";
import CheckBoxLogo from "../svg/CheckBoxLogo";
import SortLogo from "../svg/sortLogo";
import ActionsLogo from "../svg/ActionsLogo";

const CampaignTable = () => {
  const dataSource = [
    {
      key: "1",
      name: "Application Campaign",
      completionRate: 100,
      averageScore: 2.2,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Aug 14,2020</DateStyle>,
      actions: "",
    },
    {
      key: "2",
      name: "Check In Survey",
      completionRate: 10,
      stroke: "red",
      averageScore: 4.8,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Aug 14,2020</DateStyle>,
      actions: "",
    },
    {
      key: "3",
      name: "Employee Satisfaction Campaign",
      completionRate: 60,
      averageScore: 3.3,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Aug 14,2020</DateStyle>,
      actions: "",
    },
    {
      key: "4",
      name: "Email Campaign",
      completionRate: 90,
      averageScore: 4.2,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Aug 14,2020</DateStyle>,
      actions: "",
    },
    {
      key: "5",
      name: "Team Engagement Survey",
      completionRate: 85,
      averageScore: 3.7,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Sep 15,2021</DateStyle>,
      actions: "",
    },
    {
      key: "6",
      name: "Application Campaign",
      completionRate: 95,
      averageScore: 5,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Sep 15,2021</DateStyle>,
      actions: "",
    },
    {
      key: "7",
      name: "Check In Survey",
      completionRate: 30,
      averageScore: 4.0,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Sep 15,2021</DateStyle>,
      actions: "",
    },
  ];

  const columns = [
    {
      title: (
        <ColumnTitle>
          <ColumnName1>Name</ColumnName1>

          <SortLogoDiv>
            <SortLogo />
          </SortLogoDiv>
        </ColumnTitle>
      ),
      dataIndex: "name",
      key: "col1",
      render: (dataIndex) => (
        <div>
          <CampName>{dataIndex}</CampName>
          <NameRow />
        </div>
      ),
    },
    {
      title: (
        <ColumnTitle1>
          <ColumnName2>Completion Rate</ColumnName2>
        </ColumnTitle1>
      ),
      dataIndex: "completionRate",
      key: "col2",
      render: (dataIndex) => (
        <div>
          <RateText>{`${dataIndex}%`}</RateText>
          <ProgressDiv>
            <Progress
              percent={dataIndex}
              showInfo={false}
              strokeColor={dataIndex > 60 ? "" : "red"}
            />
          </ProgressDiv>
        </div>
      ),
    },
    {
      title: (
        <ColumnTitle1>
          <ColumnName3>Average Score</ColumnName3>
        </ColumnTitle1>
      ),
      dataIndex: "averageScore",
      key: "col3",
      render: (dataIndex) => (
        <StarDiv>
          <SingleStarDiv>
            <FullStar />
          </SingleStarDiv>
          <SingleStarDiv>
            <FullStar />
          </SingleStarDiv>
          <SingleStarDiv>
            <FullStar />
          </SingleStarDiv>
          <SingleStarDiv>
            <HalfStar />
          </SingleStarDiv>
          <SingleStarDiv>
            <EmptyStar />
          </SingleStarDiv>
          <StarText>{dataIndex}</StarText>
        </StarDiv>
      ),
    },
    {
      title: (
        <ColumnTitle1>
          <ColumnName4>Status</ColumnName4>
        </ColumnTitle1>
      ),
      dataIndex: "status",
      key: "col4",
      render: (dataIndex) => (
        <StarDiv>
          <ActiveButton>{dataIndex}</ActiveButton>
        </StarDiv>
      ),
    },
    {
      title: (
        <ColumnTitle1>
          <ColumnName5>Last Modified</ColumnName5>
          <SortLogoDiv>
            <SortLogo />
          </SortLogoDiv>
        </ColumnTitle1>
      ),
      dataIndex: "lastModified",
      key: "col5",
      render: (dataIndex) => <AlignCenterDate>{dataIndex}</AlignCenterDate>,
    },
    {
      title: (
        <ColumnTitle1>
          <ColumnName6>Last Activated</ColumnName6>
          <SortLogoDiv>
            <SortLogo />
          </SortLogoDiv>
        </ColumnTitle1>
      ),
      dataIndex: "lastActivated",
      key: "col6",
      render: (dataIndex) => <AlignCenterDate>{dataIndex}</AlignCenterDate>,
    },
    {
      title: (
        <ColumnTitle1>
          <ColumnName7>Actions</ColumnName7>
        </ColumnTitle1>
      ),
      dataIndex: "actions",
      key: "col7",
      render: () => (
        <AlignCenter>
          <ActionsLogo />
        </AlignCenter>
      ),
    },
  ];

  return (
    <div>
      <MainContainer>
        <HeaderDiv>
          <HeaderFont>Campaigns</HeaderFont>
          <HeaderActions>
            <ActionsLogo />
          </HeaderActions>
        </HeaderDiv>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={true}
          style={{ border: "none" }}
        />
      </MainContainer>
    </div>
  );
};

export default CampaignTable;
