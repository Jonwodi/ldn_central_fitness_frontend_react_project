import React from 'react';
import { Typography, Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
title: {
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  marginTop: '40px'
},
boxesText: {
  textAlign: 'center'
},
box: {
  backgroundColor: theme.palette.common.green,
  width: '600px',
  margin: 'auto',
  marginTop: '60px',
  marginBottom: '300px',
  border: '2px solid #212121',
  [breakpoints.down('sm')]: {
  width: '80%',
  marginBottom: '200px',
  }
},
boxesMW: {
  border: '1px solid #212121'
},
login: {
  width: '300px',
  margin: 'auto',
  marginBottom: '20px',
  padding: '20px',
  border: '2px solid #FFF',
  backgroundColor: theme.palette.common.grey900,
  color: '#FFF',
  display: 'flex',
  '&:hover': {
  backgroundColor: theme.palette.common.orange900,
    },
  justifyContent: 'center',
  [breakpoints.down('sm')]: {
  width: '80%',
    }, 
},
}));

export default function RegistrationForm() {
  let history = useHistory();

  const classes = useStyles();

  let formFields = {
    'first_name': '',
    'last_name': '',
    'username': '',
    'email': '',
    'password': '',
    'password_confirm': ''
  };

  const [formData, setFormData] = useState(formFields);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [formErrors, setFormErrors] = useState(formFields);

  const { REACT_APP_CLOUD_HOST_URL } = process.env;
  const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;


  async function handleSubmit(e) {

      e.preventDefault();
      try {
        if (process.env.NODE_ENV === 'development') {
          await axios.post('http://localhost:8000/registrations/', formData, { withCredentials: true });
        } 
        else if (process.env.NODE_ENV === 'production') {
          await axios.post(`${cloudBaseUrl}/registrations/`, formData, { withCredentials: true });
        }
        history.push('/login');
      } catch (err) {
        setFormErrors(err.response.data);
      }
    }

  return (
    <Box className={classes.box}>
        <Typography variant='h2' className={classes.title}>Registration</Typography>
          <Box
            sx={{
            '& .MuiTextField-root': { 
              m: 1, 
              width: '600px', 
              display: 'flex',
              margin: 'auto', 
              border: '0px',   
              padding: '25px',  
              [breakpoints.down('sm')]: {
              width: '80%',
          },  
        },
            }}
            noValidate
            autoComplete="off"
          >
            <form onSubmit={handleSubmit}>
                <Typography className={classes.boxesText} variant='h6'>Username</Typography>
                <TextField variant='outlined' id="outlined-username-input" type="text" autoComplete="current-username" placeholder='Enter Username' className={classes.boxesMW} name="username" onChange={handleChange} />
                <Typography className={classes.boxesText} variant='h6'>First name</Typography>
                <TextField variant='outlined' id="outlined-first-name-input" type="text" autoComplete="current-first-name" placeholder='Enter First name' className={classes.boxesMW} name="first_name" onChange={handleChange} />
                <Typography className={classes.boxesText} variant='h6'>Last name</Typography>
                <TextField variant='outlined' id="outlined-last-name-input" type="text" autoComplete="current-last-name" placeholder='Enter Last name' className={classes.boxesMW} name="last_name" onChange={handleChange} />
                <Typography className={classes.boxesText} variant='h6'>Email Address</Typography>
                <TextField variant='outlined' id="outlined-email-input" type="email" autoComplete="current-email" placeholder='Enter Email Address' className={classes.boxesMW} name="email" onChange={handleChange} />
                <Typography className={classes.boxesText} variant='h6'>Password</Typography>
                <TextField variant='outlined' id="outlined-password-input" type="password" autoComplete="current-password" placeholder='Enter Password' className={classes.boxesMW} name="password" onChange={handleChange} />
                <Typography className={classes.boxesText} variant='h6'>Confirm Password</Typography>
                <TextField variant='outlined' id="outlined-confirm-password-input" type="password" autoComplete="confirm-current-password" placeholder='Confirm Password' className={classes.boxesMW} name="password_confirm" onChange={handleChange} />
                <Button className={classes.login} type='submit'>
                  <Typography>REGISTER</Typography>
                </Button>
            </form>
        </Box> 
    </Box>
  )
}
