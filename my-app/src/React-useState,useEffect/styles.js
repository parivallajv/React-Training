import { styled } from "styled-components";

export const Div = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;
  // display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  align-items: center;
  color: #f1356d;
  margin-bottom: 8px;
`;

export const Img = styled.img`
  width: 200px;
  text-align:center;
`;
export const H1 = styled.h1`
  font-size: 28px;
  align-items: center;
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

export const Button=styled.button`
width:80px;
margin-left:20px;
font-size:18px;
height:30px;
color:white;
background-color:#24a0ed;
border:none;
border-radius:5px;
`
export const Div2=styled(Div)`
text-align:center;
margin:0px auto;
&:hover {
  box-shadow: none;
}
padding: 2px 2px;

`