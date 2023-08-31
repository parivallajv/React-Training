import { CreateProfileBtn, SearchInput } from "../styles";

import Searchicon from "../svg/SearchIcon";
import ProfileCard from "./ProfileSection/ProfileCard";

import person1 from "../Images/person-1.png";
import person2 from "../Images/person-2.png";
import person3 from "../Images/person-3.png";
import person4 from "../Images/person-4.png";
import person5 from "../Images/person-5.png";
import ClaimProfile from "./ProfileSection/ClaimProfileBtn";
import SeparatorLine from "./ProfileSection/SeparatorLine";
import BackBtn from "./ProfileSection/BackBtn";
import HeaderLogo from "./ProfileSection/HeaderLogo";
import HeaderText from "./ProfileSection/HeaderText";
import LoadMoreBtn from "./ProfileSection/LoadMoreBtn";

const PersonalInfo = () => {
  return (
    <div>
      <HeaderLogo />

      <HeaderText />
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

      <LoadMoreBtn />

      <ClaimProfile />

      <SeparatorLine />

      <CreateProfileBtn>Continue to create your profile</CreateProfileBtn>

      <BackBtn />
    </div>
  );
};

export default PersonalInfo;
