import React, { Component, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './global/global';
import Title from '../src/components/title';
import Galaxy from '../src/components/galaxy';
import '../src/styles/becalm2.css';
import CountDownTimer from './components/CountDownTimer/countDownTimer';

function App() {
  const [theme, setTheme] = useState('light');  
  //const [interval, setMyInterval] = useState(setInterval(function () {}, 10));

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Galaxy />
        <Title onClick={toggleTheme} />
        <CountDownTimer/>
      </>
    </ThemeProvider>
  );
}

export default App;
