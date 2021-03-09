import React, { Component } from 'react';
import Timer from '../CountDownTimer/Timer';
import Button from '../../components/button';

const initialState = {
  display: '',
  progress: '',
  number: '',
  ticker: '',
  transitionDuration: 850,
  timeLeft: 30,
  color: '',
  started: false,
};

class CountDownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount = () => {
    let display = document.querySelectorAll('.timer-display')[0];
    console.log(document.querySelectorAll('.timer-display'));
    let progress = document.querySelector('.circle__progress--fill');
    let number = display.querySelector('.percent__int');
    this.setState({
      display,
      progress,
      number,
    });
  };

  start = () => {
    this.runTimer();
  };

  stop = () => {
    this.state.ticker.stop();

    //-- reset the DOM.
    this.reset();
  };

  // onStartClick = (e) => {
  //   let button = e.target;

  //   if (started) {
  //     setStart(false);
  //   } else {
  //     setStart(true);

  //     setTimeout(() => {
  //       let startTime = Date.now();
  //       let timeLeft = 0;
  //       let duration = 30;
  //       let text = document.getElementById('timer-text');
  //       console.log(text);
  //       setMyInterval(
  //         setInterval(() => {
  //           timeLeft = duration - (((Date.now() - startTime) / 1000) | 0);
  //           text.innerHTML = timeLeft.toString();

  //           if (timeLeft === 0) {
  //             setStart(false);
  //             console.log(interval);
  //             clearInterval(interval);
  //             setMyInterval(function () {}, 0);
  //             return;
  //           }
  //         }, duration)
  //       );
  //     }, 2000);
  //   }
  // };

  // onStopClick = (e) => {
  //   let button = e.target;

  //   if (started) {
  //     setStart(false);
  //     console.log(interval);
  //     clearInterval(interval);
  //     setMyInterval(function () {}, 0);
  //   } else {
  //     setStart(true);
  //   }
  // };

  handleStartClick = (e) => {
    let started = this.state.started;
    this.setState({ started: !this.state.started });
    if (started) {
      this.setState({ started: false });
    } else {
      document.getElementsByClassName('count-wrapper')[0].style =
        'display:block';
      this.setState({ started: true });
      this.start();
    }
  };

  handleStopClick = (e) => {
    let started = this.state.started;

    if (started) {
      this.setState({ started: false });
      document.getElementsByClassName('count-wrapper')[0].style =
        'display:none';
      this.stop();
    } else {
      this.setState({ started: true });
    }
  };

  runTimer = () => {
    let {
      display,
      progress,
      timeLeft,
      number,
      transitionDuration,
    } = this.state;
    let constantTime = timeLeft;
    console.log(number);
    let radius = progress.r.baseVal.value;
    let circumference = 2 * Math.PI * radius;

    let doWork = function () {
      timeLeft--;
      console.log(timeLeft);
      let offset = (circumference * (constantTime - timeLeft)) / constantTime;

      progress.style.setProperty('--initialStroke', circumference);
      progress.style.setProperty(
        '--transitionDuration',
        `${transitionDuration}ms`
      );
      progress.style.strokeDashoffset = offset;
      console.log(number);
      number.innerHTML = timeLeft;
      //this.setState({ timeLeft });
    };

    let ticker = new Timer(doWork, 1000, function () {
      this.stop();
    });
    ticker.start();
    this.setState({ ticker });

    //-- Stop the Ticker.
    //-- 1050 to allow for time to get to 0
    setTimeout(() => ticker.stop(), timeLeft * 1020);
  };

  reset = () => {
    let { number, progress, timeLeft } = this.state;
    progress.style.setProperty('--initialStroke', 0);
    progress.style.setProperty('--transitionDuration', 0);

    number.innerHTML = initialState.timeLeft;

    this.setState({ state: initialState });
  };

  // style = {
  //   position: 'absolute',
  //   height: '200px',
  //   width: '200px',
  //   border: '1px solid black',
  // };

  render() {
    let started = this.state.started;
    return (
      <>
        {!started && (
          <div className='start-wrapper'>
            <Button
              text='START'
              classes={'button circle start from-top'}
              onClick={(e) => this.handleStartClick(e)}
            />
          </div>
        )}
        {started && (
          <div className='inline-wrapper'>
            <Button
              text='stop'
              classes={'button circle-small stop from-top'}
              onClick={(e) => this.handleStopClick(e)}
            ></Button>
          </div>
        )}
        <div className='count-wrapper' style={{ display: 'none' }}>
          <div className='display-container'>
            <div className='timer-display' data-note='1'>
              <div className='circle'>
                <svg width='300' height='300' className='circle__svg'>
                  <circle
                    cx='189'
                    cy='120'
                    r='110'
                    className='circle__progress circle__progress--path'
                  ></circle>

                  <circle
                    cx='189'
                    cy='120'
                    r='110'
                    className='circle__progress circle__progress--fill'
                  ></circle>
                </svg>
                <div className='percent'>
                  <span className='percent__int'>{this.state.timeLeft}</span>
                  <span className='percent__dec'>00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CountDownTimer;
