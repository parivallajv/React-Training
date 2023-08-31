import {
    CircleInnerSt,
    EditCircleOuterSt,
  EditLogoDiv,
  ReviewCard,
  ReviewFont,
  SLetter,
  UserLocation,
  UserName,
} from "../../styles";
import AvatarBorder from "../../svg/AvatarBorder";
import EditCircleInner from "../../svg/EditCircleInner";
import EditCircleOuter from "../../svg/EditCircleOuter";
import EditLogo from "../../svg/EditLogo";

const ReviewSection = () => {
  return (
    <div>
      <ReviewCard>
        <AvatarBorder />
        <SLetter>S</SLetter>
        <UserName>Shauna M</UserName>
        <UserLocation>Pawnee, IL</UserLocation>
        <ReviewFont>
          North Pacific was amazing and helped keep me up to date on all
          developments...
        </ReviewFont>
      </ReviewCard>
      <EditCircleOuterSt>
        <EditCircleOuter />
      </EditCircleOuterSt>

      <CircleInnerSt>
        <EditCircleInner />
      </CircleInnerSt>
      <EditLogoDiv>
        <EditLogo />
      </EditLogoDiv>
    </div>
  );
};

export default ReviewSection;
