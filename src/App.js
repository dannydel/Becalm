import React, { Component, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './global/global';
import Title from '../src/components/title';
import Galaxy from '../src/components/galaxy';
import TimeSlider from '../src/components/timeSlider';
import CountDownTimer from './components/CountDownTimer/countDownTimer';
import Footer from './components/footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [time, setTime] = useState(1);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setTime(time);
  };
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Galaxy />
        <Title onClick={toggleTheme} />
        <TimeSlider onChangeValue={handleTimeChange} time={time}/>
        <CountDownTimer selectedTime={time}/>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
