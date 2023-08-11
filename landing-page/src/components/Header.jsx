import { useState } from "react";
import { ArrowDivision, DropdownContent, H1, HamburgerStyle, LeftHeader, MainContainer, MainHeader, Navigation, RightHeader, Title } from "../sunny-styles";
import ArrowDownIcon from "../svg/ArrowDownIcon";
import Hamburger from "../svg/Hamburger";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return ( 
        <MainContainer>
        <MainHeader>
          <LeftHeader>
            <H1>sunnyside</H1>
          </LeftHeader>
          <RightHeader>
            <Navigation href="/about">About</Navigation>
            <Navigation href="/services">Services</Navigation>
            <Navigation href="/projects">Projects</Navigation>
            <Navigation href="/contact">CONTACT</Navigation>
          </RightHeader>
          <HamburgerStyle onClick={toggleMenu}><Hamburger/>
            </HamburgerStyle>
          <DropdownContent isOpen={isOpen}>
            <Navigation href="/about">About</Navigation>
            <Navigation href="/services">Services</Navigation>
            <Navigation href="/projects">Projects</Navigation>
            <Navigation href="/contact">CONTACT</Navigation>
          </DropdownContent>  
        </MainHeader>
        <Title>WE ARE CREATIVES</Title>
        <ArrowDivision><ArrowDownIcon/></ArrowDivision>
        
      </MainContainer>
    );
}
 
export default Header;