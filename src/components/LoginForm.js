import { Button, Divider, Box, Typography, TextField, Link } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
Register: {
  width: '600px',
  margin: 'auto',
  marginBottom: '20px',
  backgroundColor: theme.palette.common.grey900 ,
  color: '#FFF',
  display: 'flex',
  justifyContent: 'center',
   '&:hover': {
     backgroundColor: theme.palette.common.green,
    },
    [breakpoints.down('sm')]: {
      width: '80%',
    }, 
},
login: {
  width: '600px',
  margin: 'auto',
  marginBottom: '20px',
  backgroundColor: theme.palette.common.green,
  color: '#FFF',
  display: 'flex',
  justifyContent: 'center',
    '&:hover': {
      backgroundColor: theme.palette.common.grey900,
    },
    [breakpoints.down('sm')]: {
      width: '80%',
    }, 
},
box: {
  marginTop: '60px',
},
dividerline: {
width: '600px',
margin: 'auto',
marginBottom: '20px',
backgroundColor: theme.palette.common.grey900,
  [breakpoints.down('sm')]: {
    width: '80%',
  }, 
}, 
boxes: {
  marginBottom: '20px',
},
boxesText: {
  textAlign: 'center'
},
}))

export default function LoginForm() {
  const classes = useStyles();
  let history = useHistory();
  
  let formFields = {
    'username': '',
    'password': '',
  };

  const [formData, setFormData] = useState(formFields);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [formErrors, setFormErrors] = useState(formFields);

  const {REACT_APP_CLOUD_HOST_URL} = process.env;
  const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;

  async function handleSubmit(e) {
      e.preventDefault();
      try {
        if (process.env.NODE_ENV === 'development') {
          await axios.post('http://localhost:8000/sessions/', formData, { withCredentials: true });
        } 
        else if (process.env.NODE_ENV === 'production') {
          await axios.post(`${cloudBaseUrl}/sessions/`, formData, { withCredentials: true });
        }
        history.push('/');
      } catch (err) {
        setFormErrors(err.response.data);
      }
    }
    


  return (
    <Box className={classes.box}>
        <form onSubmit={handleSubmit}>
            <Link className={classes.Register} href={'/join'}>
              <Typography>REGISTER HERE</Typography>
            </Link>
            <Divider className={classes.dividerline}/>
            <Box
            sx={{
              '& .MuiTextField-root': {
                m: 1, 
                width: '600px', 
                display: 'flex',
                margin: 'auto', 
                border: '1px solid #212121',   
                  [breakpoints.down('sm')]: {
                    width: '80%',
              },  
            },
            }}
            noValidate
            autoComplete="off"
            >
            <div className={classes.boxes}>
              <Typography className={classes.boxesText} variant='h6'>Username</Typography>
              <TextField variant='outlined'id="outlined-username-input" type="text" autoComplete="current-username" placeholder='Username' className={classes.boxesMW} name="username" onChange={handleChange} />
            </div>
            <div className={classes.boxes}>
              <Typography className={classes.boxesText} variant='h6'>Password</Typography>
              <TextField variant='outlined' id="outlined-password-input" type="password" autoComplete="current-password" placeholder='Password' className={classes.boxesMW} name="password" onChange={handleChange} />
            </div>
          </Box>
          <Button type='submit' className={classes.login}>
            <Typography>LOGIN</Typography>
          </Button>
      </form>
    </Box>
  )
}
