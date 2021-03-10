import React, { Component } from 'react';
import Timer from '../CountDownTimer/Timer';
import Button from '../../components/button';

const initialState = {
  display: '',
  progress: '',
  number: '',
  ticker: '',
  transitionDuration: 850,
  timeLeft: 1,
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
    let timeLeft = this.props.selectedTime * 60;
    this.setState({
      display,
      progress,
      number,
      timeLeft,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedTime !== prevProps.selectedTime) {
      this.setState({ timeLeft: this.props.selectedTime * 60, ticket: '' });
    }
  }

  start = () => {
    this.runTimer();
  };

  stop = () => {
    this.state.ticker.stop();
    this.reset();
  };

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
                  {/* <span className='percent__dec'>00</span> */}
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
