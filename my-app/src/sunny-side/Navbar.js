import { LeftHeader, RightHeader, Header } from "./sunny-styles";

const Navbar = () => {
  return (
    <div>
      <Header>
        <LeftHeader>
          <h3>sunnyside</h3>
        </LeftHeader>
        
        <RightHeader>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">CONTACT</a>
        </RightHeader>
      </Header>
      
    </div>
  );
};

export default Navbar;