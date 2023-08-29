import {
  ArrowBorderSt,
  ArrowContainer,
  CardLayout,
  ClaimBoxFont,
  ClaimBoxLayout,
  CreateProfileDiv,
  DividerDiv,
  DividerStyle,
  EllipseBorderDiv,
  EmailDivision,
  EmailFont,
  GreyHighLighter,
  HeaderDivision,
  HeaderFont,
  ImageDivision,
  LeftArrowDiv,
  LeftArrowSt,
  LeftDivision,
  LoadMoreDivision,
  LoadMoreFont,
  LogoDivision,
  NameFont,
  PlaceAnswer,
  PlaceLayout,
  PlaceTitle,
  RightBanner,
  RightDivision,
  RoleNameFont,
  SearchBoxDivision,
  SearchDivision,
  SearchInput,
  SeparatorDiv,
  SeparatorText,
} from "../styles";

import Person1 from "../Images/person-1.png";
import EllipseBorder from "../svg/EllipseBorder";
import ExperienceLogo from "../svg/ExperienceLogo";
import Searchicon from "../svg/SearchIcon";
import ProfileCard from "./ProfileCard";

import person1 from "../Images/person-1.png";
import person2 from "../Images/person-2.png";
import person3 from "../Images/person-3.png";
import person4 from "../Images/person-4.png";
import person5 from "../Images/person-5.png";
import { Divider } from "antd";
import Separator from "../svg/Separator";
import LeftArrow from "../svg/LeftArrow";
import LeftArrowBorder from "../svg/LeftArrowBorder";

const PersonalInfo = () => {
  const profiles = [
    {
      name: "Stephen Marshall",
      role: "Mortgage Banker. NMLS #1679954",
      workplace: "New American Funding",
      location: "Downers Grove",
      email: "stexxx@northpacific.com",
    },
    {
      name: "Steve Marsh",
      role: "Mortgage Banker. NMLS #1679954",
      workplace: "Tech Company",
      location: "San Francisco",
      email: "john.doe@example.com",
    },
  ];

  return (
    <div>
      <LogoDivision>
        <ExperienceLogo />
      </LogoDivision>

      <HeaderDivision>
        <HeaderFont>
          We found <GreyHighLighter>10 profiles</GreyHighLighter> matching your
          details. Select a profile to claim
        </HeaderFont>
      </HeaderDivision>

      <SearchInput placeholder="Search" prefix={<Searchicon />}></SearchInput>

      <ProfileCard
        name="Stephen Marshall"
        imageUrl={person1}
        bgColor="var(--blue-t-98, #FAFCFD)"
      />
      <ProfileCard name="Steve Marsh" imageUrl={person2} bgColor="#FFFFFF" />
      <ProfileCard name="Stevie Marie" imageUrl={person3} bgColor="#FFFFFF" />
      <ProfileCard name="Steven Marshal" imageUrl={person4} bgColor="#FFFFFF" />
      <ProfileCard name="Stiven Marsh" imageUrl={person5} bgColor="#FFFFFF" />
      <LoadMoreDivision>
        <LoadMoreFont>+5 more</LoadMoreFont>
      </LoadMoreDivision>
      <ClaimBoxLayout>
        <ClaimBoxFont>Claim this profile</ClaimBoxFont>
      </ClaimBoxLayout>
      <SeparatorDiv>
        <Separator />
        <SeparatorText> OR </SeparatorText>
        <Separator />
      </SeparatorDiv>

      <CreateProfileDiv>Continue to create your profile</CreateProfileDiv>
      <ArrowContainer>
        <LeftArrowBorder />
      </ArrowContainer>
      <LeftArrowDiv>
        <LeftArrow />
      </LeftArrowDiv>
    </div>
  );
};

export default PersonalInfo;
