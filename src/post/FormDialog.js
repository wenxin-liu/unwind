import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import AlarmIcon from '@mui/icons-material/Alarm';

import './FormDialog.css'


//TODO: refactor and clean up now unused seconds / inputSeconds logic
//TODO: break up into smaller / two classes?, form dialog and clock?

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      inputMinutes: 0,
      inputSeconds: 0,
      time: {},
      seconds: 0,
      buttonMessage: "Add"
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

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
    this.handleClose();

    this.setState({
      buttonMessage: "On"
    });

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

      this.setState({
        buttonMessage: "Add"
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

  }

  handleClickOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }


  render() {
    return (
    <div>

      <Button variant="outlined" color="primary" id="timer" startIcon={<AlarmIcon/>}  onClick={this.handleClickOpen}>
        {this.state.buttonMessage}
      </Button>

      <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>Set a timer?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Limit break length
          </DialogContentText>
          <TextField autoFocus="autoFocus" margin="normal" id="outlined-helperText" label="Minutes" onChange={this.handleChange} name="inputMinutes"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.startTimer}>Submit</Button>
        </DialogActions>
      </Dialog>

    </div>);
  }
}

export default FormDialog;
