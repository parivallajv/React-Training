import {
  CardLayout,
  ClaimBoxFont,
  ClaimBoxLayout,
  EllipseBorderDiv,
  EmailDivision,
  EmailFont,
  GreyHighLighter,
  HeaderDivision,
  HeaderFont,
  ImageDivision,
  LeftDivision,
  LoadMoreDivision,
  LoadMoreFont,
  LogoDivision,
  NameFont,
  PlaceAnswer,
  PlaceLayout,
  PlaceTitle,
  RightDivision,
  RoleNameFont,
  SearchBoxDivision,
  SearchDivision,
  SearchInput,
} from "../styles";

import Person1 from "../Images/person-1.png";
import EllipseBorder from "../svg/EllipseBorder";
import ExperienceLogo from "../svg/ExperienceLogo";
import Searchicon from "../svg/SearchIcon";
import ProfileCard from "./ProfileCard";

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

      <ProfileCard name="Stephen Marshall" />
      <ProfileCard name="Steve Marsh" />
      <ProfileCard name="Stevie Marie" />
      <ProfileCard name="Steven Marshal" />
      <ProfileCard name="Stiven Marsh" />
      <LoadMoreDivision>
        <LoadMoreFont>+ 5 more</LoadMoreFont>
      </LoadMoreDivision>

      <ClaimBoxLayout>
        <ClaimBoxFont>Claim this profile</ClaimBoxFont>
      </ClaimBoxLayout>
    </div>
  );
};

export default PersonalInfo;
