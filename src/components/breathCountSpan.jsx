import React from 'react';

const BreathCountSpan = ({ minutes }) => {
  return (
    <span>
      {minutes} min - {minutes * 7} breaths
    </span>
  );
};

export default BreathCountSpan;
