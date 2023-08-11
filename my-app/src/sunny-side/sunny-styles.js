
import { styled } from "styled-components";
import Background from "./sunny-side/images/desktop/image-header.jpg";

export const LeftHeader = styled.div`
  display: block;
  padding: 1% 2%;
`;

export const RightHeader = styled.div`
  display: block;
  padding: 1% 2%;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MainContainer = styled.div`
  background-image: url({Background});
`;
