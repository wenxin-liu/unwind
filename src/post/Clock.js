import React from 'react';
import ReactDOM from 'react-dom';
import './Clock.css';
import './youtube.css'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMinutes: 0,
      inputSeconds: 0,
      time: {},
      seconds: 0
    };
    this.timer = [];
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({time: timeLeftVar});
  }

  startTimer(event) {
    let seconds = 0;

    let inputMinutes = parseInt(this.state.inputMinutes);
    let inputSeconds = parseInt(this.state.inputSeconds);

    if (isNaN(inputMinutes)) {
      inputMinutes = 0;
    }

    if (isNaN(inputSeconds)) {
      inputSeconds = 0;
    }

    seconds += inputMinutes * 60 + inputSeconds;

    this.setState({
      seconds: seconds
    }, () => {
      if (this.state.seconds > 0) {
        this.timer.push(setInterval(this.countDown, 1000));
      }
    });

    event.preventDefault();
  }

  countDown() {
    let moreThanOneTimer = this.timer.length > 1;
    if (moreThanOneTimer) {
      for (let i = 0; i < this.timer.length - 1; i++) {
        // If more than one timer, clear all previous timers except latest
        clearInterval(this.timer[i]);
      }
    }

    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({time: this.secondsToTime(seconds), seconds: seconds});

    // Check if we're at zero.
    if (seconds <= 0) {
      clearInterval(this.timer[this.timer.length - 1]);
      alert("Your time is up!");
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

  }

  render() {
    return (<div id="clock-wrapper">
      <div id="inner-clock">
        Set timer?
        <form id="set-timer" onSubmit={this.startTimer}>
          <input type="text" name="inputMinutes" placeholder="Minutes" onChange={this.handleChange}/>
          <input type="text" name="inputSeconds" placeholder="Seconds" onChange={this.handleChange}/>
          <input type="submit" value="Start timer"/>
        </form>
        Time left: {this.state.time.m} minutes &nbsp; {this.state.time.s} seconds
      </div>
    </div>);
  }
}
export default Clock;
