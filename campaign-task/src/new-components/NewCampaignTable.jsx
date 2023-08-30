import { Header, HeaderDiv, MainDiv } from "../NewStyles";
import HeaderActionsLogo from '../newSvg/HeaderActionsLogo'

const NewCampaignTable = () => {
  return (
    <div>
      <MainDiv>
        <HeaderDiv>
          <Header>Campaigns</Header>
          <HeaderActionsLogo/>
        </HeaderDiv>
      </MainDiv>
    </div>
  );
};

export default NewCampaignTable;
