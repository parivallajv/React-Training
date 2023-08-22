import React from 'react';
import { Slider } from 'antd';
import styled from 'styled-components';

const StyledSliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SliderRate = ({ value, onChange }) => {
  return (
    <StyledSliderContainer>
      <Slider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={onChange}
      />
      <span>{value}%</span>
    </StyledSliderContainer>
  );
};

export default SliderRate;
