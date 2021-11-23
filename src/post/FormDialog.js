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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("hello world");
    setOpen(false);
  };

  return (<div>
    <Button id="timer" variant="outlined" onClick={handleClickOpen}>
      <img src={icon}/>
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Set a timer?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Limit break length
        </DialogContentText>
        <TextField autoFocus margin="normal" id="outlined-helperText" label="Minutes" defaultValue="5"/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  </div>);
}
