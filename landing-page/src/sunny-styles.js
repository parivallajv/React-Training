import { styled } from "styled-components";
import Background from "./images/desktop/image-header.jpg";
import Cherry from "./images/desktop/image-graphic-design.jpg";
import Orange from "./images/desktop/image-photography.jpg";

export const LeftHeader = styled.div`
  padding: 1% 2%;
`;

export const RightHeader = styled.div`
  padding: 1% 2%;

  @media (max-width: 375px) {
    display: none;
  }
`;
export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HamburgerStyle = styled.div`
  display: none;

  @media (max-width: 375px) {
    display: block;
    margin: 40px 20px;
    cursor: pointer;

    &:hover {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 2;
    }
  }
`;

export const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  right: 3%;
  top: 120px;
  width: 90%;
  height: 240px;
  z-index: 1;
  background-color: white;
`;

export const MainContainer = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  background-position: 0px 0px;

  @media (max-width: 375px) {
    width: 375px;
    background-size: cover;
    background-position: center;
  }
`;

export const H1 = styled.h2`
  font-weight: 900;
  color: white;
  font-size: 32px;
  font-family: "Jost", sans-serif;
  letter-spacing: -2.5px;
`;
export const Title = styled.h1`
  font-family: "Fraunces", serif;
  font-weight: 900;
  color: white;
  font-size: 58px;
  text-align: center;
`;

export const Navigation = styled.a`
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 20px 20px;
  margin-left: 20px;
  color: white;
  text-decoration: none;
  line-height: 80px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 7%;
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 375px;
    height: 10px;
    display: flex;
    color: black;
    flex-direction: column;
  }
`;

export const MainDivision = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -4px;

  @media (max-width: 375px) {
    width: 375px;
    display: flex;
    flex-direction: column;
  }
`;

export const MainDivisionBrand = styled(MainDivision)`
  @media (max-width: 375px) {
    width: 375px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const MainDivisionAudience = styled(MainDivision)`
  @media (max-width: 375px) {
    width: 375px;
    display: flex;
    flex-direction: column;
  }
`;

export const LeftDivision = styled.div`
  text-align: center;

  @media (max-width: 375px) {
    width: 375px;
  }
`;
export const RightDivision = styled.div`
  @media (max-width: 375px) {
    width: 375px;
  }
`;

export const Image = styled.img`
  @media (max-width: 375px) {
    width: 375px;
  }
`;
export const SubTitle = styled.h3`
  font-family: "Fraunces", serif;
  font-size: 42px;
  font-weight: 900;
  text-align: left;
  width: 290px;
  color: #242f3a;
  padding: 60px 100px 0px 170px;

  @media (max-width: 375px) {
    width: 375px;
    padding: 0px 0px 0px 0px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  line-height: 28px;
  text-align: left;
  color: #a2a0ad;
  padding: 0px 100px 20px 170px;

  @media (max-width: 375px) {
    width: 375px;
    padding: 0px 0px 0px 0px;
    text-align: center;
  }
`;

export const SubTitleForCherry = styled(SubTitle)`
  margin-top: 350px;
  text-align: center;
  padding: 0px 100px 0px 250px;
  color: #242f3a;

  @media (max-width: 375px) {
    width: 375px;
    background-size: cover;
    background-position: bottom;
    padding: 0px;
  }
`;

export const ParagraphForCherry = styled(Paragraph)`
  text-align: center;
  color: #1e594b;

  @media (max-width: 375px) {
    width: 375px;
    background-size: cover;
    background-position: bottom;
    padding: 0px 0px 10px 0px;
  }
`;
export const LearnMoreLinkBrand = styled.a`
  font-family: "Fraunces", serif;
  font-size: 22px;
  text-align: left;
  color: #242f3a;
  padding: 0px 230px 0px 0px;
  top-margin: 30px;
  font-weight: 800;

  @media (max-width: 375px) {
    width: 375px;
    text-align: center;
    padding: 0px 0px 0px 0px;
    line-height: 100px;
  }
`;

export const LearnMoreLinkAudience = styled(LearnMoreLinkBrand)`
  padding: 0px 0px 0px 170px;
  color: #242f3a;

  @media (max-width: 375px) {
    width: 375px;
    text-align: center;
    padding: 0px 0px 0px 100px;
    line-height: 100px;
  }
`;

export const LeftDivisionWithText = styled.div`
  background-image: url(${Cherry});
  text-align: center;
  width: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 375px) {
    width: 375px;
    background-size: cover;
    background-position: bottom;
  }
`;
export const RightDivisionWithText = styled.div`
  background-image: url(${Orange});
  width: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 375px) {
    width: 375px;
    background-size: cover;
    background-position: bottom;
  }
`;
export const TestimonalDivision = styled(MainDivision)`
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    width: 375px;
    display: flex;
    flex-direction: column;
  }
`;

export const TestimonalTitle = styled(SubTitle)`
  text-align: center;
  width: 90%;
  font-size: 24px;
  color: #aaaaab;
  margin-top: 60px;

  @media (max-width: 375px) {
    width: 375px;
    text-align: center;
    padding: 0px;
  }
`;

export const TestimonalCards = styled.div`
  width: 330px;
  text-align: center;
  line-height: 30px;
  padding: 20px 20px;

  @media (max-width: 375px) {
    margin: 50px auto;
    text-align: center;
    padding: 0px;
  }
`;
export const TestimonalImg = styled.img`
  width: 70px;
  border-radius: 50px;
  margin: 50px auto;

  @media (max-width: 375px) {
    margin: 0;
    text-align: center;
    padding: 0px;
  }
`;
export const TestimonalPara = styled.p`
  text-align: center;
  color: #5e5f63;
  @media (max-width: 375px) {
    margin: 0;
    text-align: center;
    padding: 0px;
  }
`;

export const TestimonalJob = styled(TestimonalPara)`
  margin-bottom: 120px;
  @media (max-width: 375px) {
    margin: 10px auto;
    text-align: center;
    padding: 0px;
  }
`;
export const TestimonalSubTitile = styled(SubTitle)`
  font-family: "Fraunces", serif;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  width: 325px;
  padding: 0px 0px 0px 0px;
`;

export const GalleryDivision = styled.div`
  display: flex;
  @media (max-width: 375px) {
    width: 375px;
    display: grid;
    grid-template-columns: auto auto;
  }
`;
export const GalleryCard = styled.img`
  width: 25%;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const FooterDivision = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 350px;
  background-color: #90d4c5;

  @media (max-width: 375px) {
    width: 375px;
  }
`;

export const FooterTitle = styled.h2`
  text-align: center;
  font-weight: 900;
  color: #2a7161;
  font-size: 32px;
  font-family: "Jost", sans-serif;
  letter-spacing: -2.5px;
  margin-top: 80px;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const FooterLinks = styled.a`
  padding: 20px 40px;
  color: #549889;
  margin-top: -10px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const FooterLogo = styled.a`
  padding: 10px 20px;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    fill: white;
    color: white;
  }
`;

export const ArrowDivision = styled.div`
  margin: 130px 52% 100px 49%;
  scale: 1.2;

  @media (max-width: 375px) {
    margin: 20% 45%;
  }
`;
