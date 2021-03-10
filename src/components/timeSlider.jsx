import React from 'react';

const TimeSlider = ({ onChangeValue, time }) => {
  return (
    <div className='slide-container'>
      <input
        type='range'
        min='1'
        max='5'
        defaultValue='1'
        className='slider'
        onChange={onChangeValue}
        id='timeSlider'
      />
      <h3 className='text-center'>{time} Minute Breathing Session</h3>
    </div>
  );
};

export default TimeSlider;
