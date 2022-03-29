import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles' ;
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CancelIcon from '@material-ui/icons/Cancel';
import AppBar from '@material-ui/core/AppBar';



const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: '50px',
  },
  standardSuccess: {
    // .MuiAlert-standardSuccess
    backgroundColor: theme.palette.common.light,
    color: theme.palette.common.orange900,
    '& .MuiSvgIcon-root': {
      color: theme.palette.common.orange900,
    }, 
  },
  closeChange: {
    '&:hover': {
    color: theme.palette.common.green,
  }
}
}))


export default function Cookie() {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Collapse in={open}>
        <Alert 
            classes={{standardSuccess: classes.standardSuccess}} 
            action=
            {<IconButton aria-label="close" 
            color="inherit" 
            size="small"
            onClick={() =>{
              setOpen(false);
            }}>
            <CancelIcon fontSize="inherit" className={classes.closeChange} />
          </IconButton>}> LDN Central Fitness Club uses cookies. By continuing you are agreeing to our use of cookies. Learn more. 
        </Alert>
      </Collapse>
    </AppBar>
  )
}
