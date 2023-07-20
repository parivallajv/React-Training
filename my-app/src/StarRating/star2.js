import React, { useState } from 'react';
import '../App.css';

const Star = ({ selected, onClick }) => (
  <span className={selected ? 'star selected' : 'star'} onClick={onClick}>
    &#9733;
  </span>
);

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    if (selectedRating === rating) {
      // If the selected rating is the same as the current rating, unselect it
      setRating(0);
    } else {
      setRating(selectedRating);
    }
  };

  const handleStarHover = (hoveredRating) => {
    setHoveredRating(hoveredRating);
    console.log(hoveredRating);
  };

  return (
    <div>
      <h2>Star Rating App</h2>
      <div
        className="star-container"
        onMouseLeave={() => setHoveredRating(0)}
      >
        {[1, 2, 3, 4,5].map((starNumber) => (
          <Star
            key={starNumber}
            selected={starNumber <= (hoveredRating || rating)}
            onClick={() => handleStarClick(starNumber)}
            onMouseOver={() => handleStarHover(starNumber - 0.5)}
          />
        ))}
      </div>
      <p>{rating === 0 ? 'Please rate the item' : `You rated: ${rating} stars`}</p>
    </div>
  );
};

export default StarRating;

