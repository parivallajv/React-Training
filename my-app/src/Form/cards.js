import { H3,RightDiv,Star1, Star2, Star3} from "./styleModules";
import { Avatar } from "./styleModules";


const Cards = (props) => {

  
  const getStars = (rating) => {
    const starIcons = [];
    const roundedRating = rating
    for (let i = 1; i <= 5; i++) {
      if (roundedRating >= i) {
        starIcons.push(<Star1 key={i} color='yellow' size="50px"/>);
      } else if (roundedRating >= i - 0.5) {
        starIcons.push(<Star2 key={i} color='yellow' size="50px"/>);
      } else {
        starIcons.push(<Star3 key={i} color='yellow' size="50px"/>);
      }
    }
    return starIcons;
  };

  const handleDeleteClick = () => {
    props.deleteData(props.index);
  };
 
  return (
    <RightDiv>
      <Avatar></Avatar>
      <div>
        <H3>Name: {props.name}</H3>
        <H3>Location: {props.location}</H3>
        <H3>Rating: {getStars(props.rating)} </H3>
        <H3>Feedback: {props.feedback}</H3>
        <img src="" alt="" />
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </RightDiv>
  );
};

export default Cards;
