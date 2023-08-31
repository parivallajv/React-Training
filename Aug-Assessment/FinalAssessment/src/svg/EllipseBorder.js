import React from "react";

const EllipseBorder = ({ imageUrl }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="108"
        height="108"
        viewBox="0 0 109 108"
        fill="none"
      >
        <circle cx="54.48" cy="54" r="53.5" fill="white" stroke="#E4E7EA" />

        <defs>
          <clipPath id="circle-clip">
            <ellipse cx="54.48" cy="54" rx="49.09" ry="48" />
          </clipPath>
        </defs>

        <image
          x="-30.91"
          y="-20.91"
          width="160%"
          height="140%"
          href={imageUrl}
          clipPath="url(#circle-clip)"
        />
      </svg>
    </div>
  );
};

export default EllipseBorder;
