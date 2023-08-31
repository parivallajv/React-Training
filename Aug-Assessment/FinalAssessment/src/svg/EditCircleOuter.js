const EditCircleOuter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="137"
      height="137"
      viewBox="0 0 137 137"
      fill="none"
    >
      <g filter="url(#filter0_d_5420_116975)">
        <circle cx="68.5" cy="59.5" r="48.5" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_5420_116975"
          x="0"
          y="0"
          width="137"
          height="137"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="9" />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.388235 0 0 0 0 0.454902 0 0 0 0 0.529412 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5420_116975"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5420_116975"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default EditCircleOuter;
