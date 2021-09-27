import React from 'react';
import ReactDOM from 'react-dom';
import './Clock.css';
import './youtube.css'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', time: {}, seconds: 0};
    this.timer = [];
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  secondsToTime(secs){
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
    this.setState({ time: timeLeftVar });
  }

  startTimer(event) {
    this.state.seconds = this.state.value;

    if (this.state.seconds > 0) {
      this.timer.push(setInterval(this.countDown, 1000));
    }
    event.preventDefault();
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    console.log("this.timer value " + this.timer);

    if (this.timer.length > 1) {
      for (let i = 0; i < this.timer.length-1; i++) {
        clearInterval(this.timer[i]);
      }
    }

    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds <= 0) {
      clearInterval(this.timer[this.timer.length-1]);
      alert("Your time is up!");
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <div id="Clock">
        <form onSubmit={this.startTimer}>
          <label>
            Time in seconds:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Start timer" />
        </form>
        minutes: {this.state.time.m} seconds: {this.state.time.s}
      </div>
    );
  }
}
export default Clock;
