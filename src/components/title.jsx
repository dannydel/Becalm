import React from 'react';
import ThemeButton from './themeButton';

const Title = ({ onClick }) => {
  return (
    <div id='Title-Wrapper'>
      <div className='container'>
        <h1 id='Title'>BECALM</h1>
        <ThemeButton onClick={onClick} />
      </div>
      <div id='Title-line'></div>
      <h2 id='Tag-line'>MINDFUL BREATHING APP</h2>
    </div>
  );
};

export default Title;
