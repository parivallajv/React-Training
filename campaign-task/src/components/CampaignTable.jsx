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
  CheckBoxSt,
  ColumnName,
  ColumnName1,
  ColumnName2,
  ColumnTitle,
  ColumnTitle1,
  DateStyle,
  HeaderActions,
  HeaderDiv,
  HeaderFont,
  MainContainer,
  RateText,
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
      name: (
        <CheckBoxSt>
          <CheckBoxLogo />
          <CampName>Application Campaign</CampName>
        </CheckBoxSt>
      ),
      completionRate: 100,
      averageScore: 2.2,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Aug 14,2020</DateStyle>,
      actions: "",
    },
    {
      key: "2",
      name: (
        <CheckBoxSt>
          <CheckBoxLogo />
          <CampName>Check In Survey</CampName>
        </CheckBoxSt>
      ),
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
      name: (
        <CheckBoxSt>
          <CheckBoxLogo />
          <CampName>Employee Satisfaction Campaign</CampName>
        </CheckBoxSt>
      ),
      completionRate: 60,
      averageScore: 3.3,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Aug 14,2020</DateStyle>,
      actions: "",
    },
    {
      key: "4",
      name: (
        <CheckBoxSt>
          <CheckBoxLogo />
          <CampName>Email Campaign</CampName>
        </CheckBoxSt>
      ),
      completionRate: 90,
      averageScore: 4.2,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Aug 14,2020</DateStyle>,
      actions: "",
    },
    {
      key: "5",
      name: (
        <CheckBoxSt>
          <CheckBoxLogo />
          <CampName>Team Engagement Survey</CampName>
        </CheckBoxSt>
      ),
      completionRate: 85,
      averageScore: 3.7,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Sep 15,2021</DateStyle>,
      actions: "",
    },
    {
      key: "6",
      name: (
        <CheckBoxSt>
          <CheckBoxLogo />
          <CampName>Application Campaign</CampName>
        </CheckBoxSt>
      ),
      completionRate: 95,
      averageScore: 5,
      status: "Active",
      lastModified: <DateStyle>Aug 14,2020</DateStyle>,
      lastActivated: <DateStyle>Sep 15,2021</DateStyle>,
      actions: "",
    },
    {
      key: "7",
      name: (
        <CheckBoxSt>
          <CheckBoxLogo />
          <CampName>Check In Survey</CampName>
        </CheckBoxSt>
      ),
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
          <CheckBoxSt>
            <CheckBoxLogo />
            <ColumnName1>Name</ColumnName1>
          </CheckBoxSt>
          <SortLogoDiv>
            <SortLogo />
          </SortLogoDiv>
        </ColumnTitle>
      ),
      dataIndex: "name",
      key: "col1",
      render: (dataIndex) => (
        <div>
          <div>{dataIndex}</div>
          <NameRow />
        </div>
      ),
    },
    {
      title: <ColumnName2>Completion Rate</ColumnName2>,
      dataIndex: "completionRate",
      key: "col2",
      render: (dataIndex) => (
        <div>
          <RateText>{`${dataIndex}%`}</RateText>
          <Progress
            percent={dataIndex}
            showInfo={false}
            strokeColor={dataIndex > 60 ? "" : "red"}
          />
        </div>
      ),
    },
    {
      title: <ColumnName2>Average Score</ColumnName2>,
      dataIndex: "averageScore",
      key: "col3",
      render: (dataIndex) => (
        <StarDiv>
          <FullStar />
          <FullStar />
          <FullStar />
          <HalfStar />
          <EmptyStar />
          <StarText>{dataIndex}</StarText>
        </StarDiv>
      ),
    },
    {
      title: <ColumnName2>Status</ColumnName2>,
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
          <ColumnName2>Last Modified</ColumnName2>
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
          <ColumnName2>Last Activated</ColumnName2>
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
      title: <ColumnName2>Actions</ColumnName2>,
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

        <Table dataSource={dataSource} columns={columns} pagination={true} />
      </MainContainer>
    </div>
  );
};

export default CampaignTable;
