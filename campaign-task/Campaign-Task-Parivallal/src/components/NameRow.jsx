import {
  CampDesc,
  CampDescNo,
  FlexRow,
  LogoDiv1,
  LogoDiv2,
  LogoDiv3,
  LogoDiv4,
  LogoDiv5,
} from "../Styles";
import PersonLogo from "../svg/PersonLogo";
import ResponseLogo from "../svg/ResponseLogo";
const noOfRecipients = [
  {
    key: 1,
    value: 100,
  },
  {
    key: 2,
    value: 200,
  },
  {
    key: 3,
    value: 150,
  },
  {
    key: 4,
    value: 50,
  },
];
const NameRow = () => {
  return (
    <FlexRow>
      <LogoDiv1>
        <PersonLogo />
      </LogoDiv1>{" "}
      <LogoDiv2>
        <CampDesc>Recipients</CampDesc>
      </LogoDiv2>{" "}
      <LogoDiv2>
        <CampDescNo>100 </CampDescNo>
      </LogoDiv2>{" "}
      <LogoDiv5>
        <CampDesc>|</CampDesc>
      </LogoDiv5>
      <LogoDiv3>
        <ResponseLogo />
      </LogoDiv3>{" "}
      <LogoDiv4>
        <CampDesc>Responses</CampDesc>
      </LogoDiv4>
      <LogoDiv3>
        <CampDescNo>20</CampDescNo>
      </LogoDiv3>
    </FlexRow>
  );
};

export default NameRow;
