import styled from 'styled-components'
import { AiFillIdcard, AiFillStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export const Star1=styled(FaStar)`
width:30px;
fill:yellow;
`
export const Star2=styled(FaStarHalfAlt)`
width:30px;
fill:yellow;
`
export const Star3=styled(FaRegStar)`
width:30px;
`

export const Div=styled.div`
padding:20px;
display:flex;
width:40%;
flex-direction:column;
justify-content:center;
border:0.5px solid grey;
border-radius:10px;
box-sizing:border-box;
margin-left:35%;
align-items:center;
margin-top:20px;
`
export const Input=styled.input`
width:250px;
height:40px;
padding:2px 5px; 
margin-bottom:30px
`

export const H2=styled.h2`
font-size:30px;
margin-bottom:50px
`

export const StarDiv=styled.div`
display:flex;
width:430px;
flex-direction:row;
justify-content:justify;
align-items:center;
margin-top:20px;
border:1px solid grey;
border-radius:10px;
padding:10px
`

export const Select=styled.select`
width:265px;
height:50px;
box-sizing:border-box;
padding:5px 5px;
margin-bottom:30px
`

export const Submit=styled.button`
width:250px;
height:50px;
background-color:#24a0ed;
color:white;
border:none;
border-radius:10px;
`

export const H3=styled.h3`
margin:10px 0px`

export const Avatar=styled(AiFillIdcard)`
font-size:70px;

`

export const RatingStar = styled(AiFillStar)`
    fill: yellow;
    width: 20px;
    height: 20px;
  `;