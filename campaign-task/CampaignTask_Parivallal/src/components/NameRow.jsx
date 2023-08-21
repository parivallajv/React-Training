import { CampDesc, CampDescNo, FlexRow } from "../Styles";
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
      <div>
        <PersonLogo />
      </div>{" "}
      <div>
        <CampDesc>Recipients</CampDesc>
      </div>{" "}
      <CampDescNo>100 </CampDescNo> <CampDesc>|</CampDesc>
      <div>
        <ResponseLogo />
      </div>{" "}
      <CampDesc>Responses</CampDesc>
      <CampDescNo>20</CampDescNo>
    </FlexRow>
  );
};

export default NameRow;
