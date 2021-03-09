import React from 'react';
const ThemeButton = ({ onClick }) => {
  return (
    <div>
      <button id='theme-button' title='Toggle Theme' onClick={onClick}></button>
    </div>
  );
};

export default ThemeButton;
