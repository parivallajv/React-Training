import { styled } from "styled-components";

export const StyledButton=styled.button`
background-color:${(props)=>props.variant==='outline'?'white':'blue'};
color:${(props)=>props.variant==='outline'?'blue':'white'};
height:40px;
width:150px;
border-radius:10px;
border:none
`

export const FancyButton=styled(StyledButton)`
background-image:linear-gradient(to right,red,yellow)

`