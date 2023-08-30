import {
  AwardBorder,
  AwardLogo,
  CountBox,
  FlexRow,
  ImageDiv,
  LabelDiv,
  LabelText,
  LocationFont,
  LocationName,
  MainContainer,
  PlaceDivision,
  PlaceSubDivision,
  ProfName,
  ProfPicBorder,
  ProfileCardContainer,
  ProfileSubContainer,
  ProfileSubContainer2,
  RankFont,
  RankSearchDivider,
  RankText,
  RatingText,
  ReviewCount,
  RoleName,
  SearchBorder,
  SearchFont,
  SearchLogo,
  StarDiv,
} from "../ProfileStyles";
import Award from "../svg/Award";
import AwardCircle from "../svg/AwardCircle";
import Label from "../svg/Label";
import Star from "../svg/Star";
import person from "../Images/person.jpeg";
import Search from '../svg/Search';
import SearchCircle from '../svg/SearchCircle'

const ProfileSection = () => {
  return (
    <MainContainer>
      <ProfileCardContainer>
        <div>
          <ProfPicBorder>
            <ImageDiv src={person} />
          </ProfPicBorder>
          <LabelDiv>
            <Label />
            <LabelText>Top 5%</LabelText>
          </LabelDiv>
        </div>
        <div>
          <ProfName>Amber Ernst</ProfName>
          <RoleName>Senior Loan Consultant. NMLS #406037</RoleName>
          <FlexRow>
            <RatingText>5.0</RatingText>
            <StarDiv>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </StarDiv>
            <ReviewCount>(9,999)</ReviewCount>
          </FlexRow>
        </div>
        <PlaceDivision>
          <PlaceSubDivision>
            <LocationFont>Location </LocationFont>
            <LocationName> Betterndorf, IA</LocationName>
          </PlaceSubDivision>
          <PlaceSubDivision>
            <LocationFont>Works at </LocationFont>
            <LocationName> New American Funding,</LocationName>
            <CountBox>+1</CountBox>
          </PlaceSubDivision>
        </PlaceDivision>
      </ProfileCardContainer>
      <RankSearchDivider>
        <ProfileSubContainer>
          <div>
            <AwardBorder>
              <AwardCircle />
              <AwardLogo>
                <Award />
              </AwardLogo>
            </AwardBorder>
          </div>
          <div>
            <RankFont>156</RankFont>
            <RankText>
              You are Ranked 156 of 2,612 Senior Loan Consultant in Betterndorf,
              IA
            </RankText>
          </div>
        </ProfileSubContainer>
        <ProfileSubContainer2>
          <div>
            <SearchBorder>
              <SearchCircle />
              <SearchLogo>
                <Search />
              </SearchLogo>
            </SearchBorder>
          </div>
          <div>
            <SearchFont>34</SearchFont>
            <RankText>Your profile was searched 34 times this week</RankText>
          </div>
        </ProfileSubContainer2>
      </RankSearchDivider>
    </MainContainer>
  );
};

export default ProfileSection;
