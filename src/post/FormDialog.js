import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './FormDialog.css'
import icon from './clock.png'

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    return (<div>
      <Button id="timer" variant="outlined" onClick={this.handleClickOpen}>
        <img src={icon}/>
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>Set a timer?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Limit break length
          </DialogContentText>
          <TextField autoFocus margin="normal" id="outlined-helperText" label="Minutes" defaultValue="5"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>);
  }
}

export default FormDialog;
