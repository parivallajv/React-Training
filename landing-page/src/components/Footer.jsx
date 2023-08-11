import { FlexRow, FooterDivision, FooterLinks, FooterLogo, FooterTitle, H1 } from "../sunny-styles";
import FbIcon from "../svg/FbIcon";
import InstaIcon from '../svg/InstaIcon'
import TwitterIcon from '../svg/TwitterIcon'
import PinterestIcon from '../svg/PinterestIcon'

const Footer = () => {
    return ( <FooterDivision>
        <FooterTitle>sunnyside</FooterTitle>
        <FlexRow>
          <FooterLinks>About</FooterLinks>
          <FooterLinks>Services</FooterLinks>
          <FooterLinks>Projects</FooterLinks>
        </FlexRow>
        <FlexRow>
          <FooterLogo>
            <FbIcon/>
          </FooterLogo>
          <FooterLogo>
            <InstaIcon/>
          </FooterLogo>
          <FooterLogo>
            <TwitterIcon/>
          </FooterLogo>
          <FooterLogo>
            <PinterestIcon/>
          </FooterLogo>
        </FlexRow>
      </FooterDivision> );
}
 
export default Footer;