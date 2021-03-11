import React, { Component } from 'react';
import Timer from '../CountDownTimer/Timer';
import Button from '../../components/button';

const initialState = {
  display: '',
  progress: '',
  number: '',
  ticker: '',
  transitionDuration: 1000,
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
    let { selectedTime } = this.props;
    const display = document.querySelectorAll('.timer-display')[0];
    const progress = document.querySelector('.circle__progress--fill');
    const number = display.querySelector('.percent__int');
    const timeLeft = selectedTime * 60;
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
    const { ticker } = this.state;
    ticker.stop();
    this.reset();
  };

  handleStartClick = (e) => {
    const { started } = this.state;
    this.setState({ started: !started });
    if (started) {
      this.setState({ started: false });
    } else {
      this.setState({ started: true });
      this.start();
    }
  };

  handleStopClick = (e) => {
    const { started } = this.state;

    if (started) {
      this.setState({ started: false });
      this.stop();
    } else {
      this.setState({ started: true });
    }
  };

  runTimer = () => {
    let { progress, timeLeft, number, transitionDuration } = this.state;
    const constantTime = timeLeft;
    const radius = progress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const classScope = this;

    let doWork = function () {
      timeLeft--;
      let offset = (circumference * (constantTime - timeLeft)) / constantTime;

      progress.style.setProperty('--initialStroke', circumference);
      progress.style.setProperty(
        '--transitionDuration',
        `${transitionDuration}ms`
      );
      progress.style.strokeDashoffset = offset;
      number.innerHTML = classScope.CalculateTimeLeft(timeLeft);
    };

    let ticker = new Timer(doWork, 1000, function () {
      this.stop();
    });
    ticker.start();
    this.setState({ ticker });

    //-- Stop the Ticker.
    //-- 1020 to allow for time to get to 0
    setTimeout(() => ticker.stop(), timeLeft * 1010);
  };

  CalculateTimeLeft = (time) => {
    let minutes = time / 60;
    let seconds = minutes * 60;

    minutes = time < 60 ? '' : minutes + ':';

    return `${minutes}${seconds}`;
  };

  reset = () => {
    const { number, progress } = this.state;
    progress.style.setProperty('--initialStroke', 0);
    progress.style.setProperty('--transitionDuration', 0);
    progress.style.strokeDashoffset = 100;
    number.innerHTML = initialState.timeLeft * 60;

    this.setState({ state: initialState });
  };

  render() {
    const started = this.state.started;
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
        <div
          className='count-wrapper'
          style={{ display: started ? '' : 'none' }}
        >
          <div className='display-container'>
            <div className='timer-display' data-note='1'>
              <div className='circle'>
                <svg width='300' height='300' className='circle__svg'>
                  <circle
                    cx='185'
                    cy='120'
                    r='110'
                    className='circle__progress circle__progress--path'
                  ></circle>

                  <circle
                    cx='185'
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
