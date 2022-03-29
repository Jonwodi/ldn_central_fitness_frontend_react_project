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
  width: '800px',
  margin: '60px auto 300px auto',
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
subTitle: {
  display: 'flex',
  justifyContent: 'center',
  margin: '0px auto 60px auto',
  color: theme.palette.common.orange900,
  [breakpoints.down('sm')]: {
    textAlign: 'center'
  }
},
}))

export default function ContactUs() {
  let history = useHistory();
  const classes = useStyles();
  let formFields = {
    'first_name': '',
    'last_name': '',
    'email': '',
    'query': '',
    'extra_comments': '',
  };

  const [formData, setFormData] = useState(formFields);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [formErrors, setFormErrors] = useState(formFields)

  const {REACT_APP_CLOUD_HOST_URL} = process.env;
  const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;


  async function handleSubmit(e) {

      e.preventDefault();
      try {
        await axios.post(process.env.NODE_ENV === 'production' ? `${cloudBaseUrl}/registrations/` : `http://localhost:8000/registrations/`, formData, { withCredentials: true });
        history.push('/');
      } catch (err) {
        setFormErrors(err.response.data);
      }
    }

  return (
    <Box className={classes.box}>
        <Typography variant='h2' className={classes.title}>CONTACT US</Typography>
        <Typography variant='h4'className={classes.subTitle}>Get in touch with LDN Central Fitness Club</Typography>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '600px', display: 'flex',
          margin: 'auto', border: '0px'  ,   padding: '25px',  [breakpoints.down('sm')]: {
          width: '80%',
        },  },
          }}
          noValidate
          autoComplete="off"
        >
          <form onSubmit={handleSubmit}>
              <Typography className={classes.boxesText} variant='h6'>FIRST NAME*</Typography>
              <TextField variant='outlined' id="outlined-first-name-input" type="text" autoComplete="current-first-name" placeholder='Enter First name' className={classes.boxesMW} name="first_name" onChange={handleChange} />
              <Typography className={classes.boxesText} variant='h6'>LAST NAME*</Typography>
              <TextField variant='outlined' id="outlined-last-name-input" type="text" autoComplete="current-last-name" placeholder='Enter Last name' className={classes.boxesMW} name="last_name" onChange={handleChange} />
              <Typography className={classes.boxesText} variant='h6'>EMAIL ADDRESS*</Typography>
              <TextField variant='outlined' id="outlined-email-input" type="email" autoComplete="current-email" placeholder='Enter Email Address' className={classes.boxesMW} name="email" onChange={handleChange} />
              <Typography className={classes.boxesText} variant='h6'>QUERY*</Typography>
              <TextField variant='outlined' id="outlined-query-input" type="text" autoComplete="current-query" placeholder='Query' className={classes.boxesMW} name="query" onChange={handleChange} />
              <Typography className={classes.boxesText} variant='h6'>Any other comments?</Typography>
              <TextField variant='outlined' id="outlined-extra-messages-input" type="text" autoComplete="current-message" placeholder='Your Message' className={classes.boxesMW} name="extra_comments" onChange={handleChange} />
              <Button className={classes.login} type='submit'>
                <Typography>SUBMIT</Typography>
              </Button>
          </form>
      </Box> 
    </Box>
  )
}


