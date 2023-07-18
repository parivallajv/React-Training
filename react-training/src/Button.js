import styled from 'styled-components'



export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.vari === "outline" ? "green" : "white"};
  color: ${(props) => (props.vari === "outline" ? "white" : "blue")};
  height: 40px;
  width: 200px;
  border: ${(props) => (props.vari === "outline" ? "none" : "1px solid blue")};
   
  &:hover{
        background-color: ${(props) => props.vari === "outline" ? "white" : "green"};
        color: ${(props) => (props.vari === "outline" ? "blue" : "white")};
    }


`;
export const FancyButton = styled(StyledButton)`
  background-image:linear-gradient(to right,red,yellow);
  color:white
`;

export const SubmitButton =styled(StyledButton).attrs({
  type:'submit'
})`
  background-color:blue;
  color:white;
  border-radius:15px;

&:active{
  color:blue;
  background-color:white
}
`