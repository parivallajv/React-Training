// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Star1, Star2, Star3 } from './styleModules';

const StarRating = (props) => {
    let rating=props.rate
    const getStars = () => {
      
      const starIcons = [];
      const roundedRating = rating
      for (let i = 1; i <= 5; i++) {
        if (roundedRating >= i) {
          starIcons.push(<Star1 key={i} color='yellow' size="10px"/>);
        } else if (roundedRating >= i - 0.5) {
          starIcons.push(<Star2 key={i} color='yellow' size="10px"/>);
        } else {
          starIcons.push(<Star3 key={i} color='yellow' size="10px"/>);
        }
      }
      return starIcons;
    };
    return <div>{getStars()}</div>;
  };
  export default StarRating;