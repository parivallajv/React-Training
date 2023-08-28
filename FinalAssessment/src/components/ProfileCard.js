import {
  CardLayout,
  EmailFont,
  LeftDivision,
  NameFont,
  PlaceAnswer,
  PlaceLayout,
  PlaceTitle,
  RightDivision,
  RoleNameFont,
} from "../styles";
import EllipseBorder from "../svg/EllipseBorder";

const ProfileCard = ({ name, role, workplace, location, email }) => {
  return (
    <div>
      <CardLayout>
        <LeftDivision>
          <EllipseBorder />
        </LeftDivision>
        <RightDivision>
          <NameFont>{name}</NameFont>
          <RoleNameFont>Mortgage Banker. NMLS #1679954</RoleNameFont>
          <PlaceLayout>
            <PlaceTitle>Works at</PlaceTitle>
            <PlaceAnswer>New American Funding</PlaceAnswer>
          </PlaceLayout>
          <PlaceLayout>
            <PlaceTitle>Location</PlaceTitle>
            <PlaceAnswer>Downers Grove</PlaceAnswer>
          </PlaceLayout>

          <EmailFont>stexxx@northpacific.com</EmailFont>
        </RightDivision>
      </CardLayout>
    </div>
  );
};

export default ProfileCard;
