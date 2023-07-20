import { H3, RatingStar, Star1, StarDiv } from "./styleModules";
import { useState } from "react";
import { Avatar } from "./styleModules";

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


const Cards = (props) => {
  const [Rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
  const getStars = (rating) => {
    const starIcons = [];
    const roundedRating = rating
    for (let i = 1; i <= 5; i++) {
      if (roundedRating >= i) {
        starIcons.push(<Star1 key={i} color='yellow' size="50px"/>);
      } else if (roundedRating >= i - 0.5) {
        starIcons.push(<FaStarHalfAlt key={i} color='yellow' size="50px"/>);
      } else {
        starIcons.push(<FaRegStar key={i} color='yellow' size="50px"/>);
      }
    }
    return starIcons;
  };

  const [clr, setClr] = useState("");
 
  return (
    <StarDiv>
      <Avatar></Avatar>
      <div>
        <H3>Name: {props.name}</H3>
        <H3>Location: {props.location}</H3>
        <H3>Rating: {getStars(props.rating)} </H3>
        <H3>Feedback: {props.feedback}</H3>
        <button onClick={() => props.deleteData(props.key)}>Delete</button>
      </div>
    </StarDiv>
  );
};

export default Cards;
