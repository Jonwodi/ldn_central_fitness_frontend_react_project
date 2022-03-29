import { Box, Typography, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Controls from '../components/controls/Controls';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Protected from '../components/Protected';


const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
fullSection: {
  marginBottom: '500px'
},
wholeBox: {
  margin: 'auto',
  marginBottom: '50px',
  textAlign: 'center',
  backgroundImage: 'url(./images/photo4.jpg)',
  backgroundRepeat: 'no-repeat',
  opacity: 0.8,
  '&:hover': {
  opacity: 1,
  },
  height: '1280px',
  width: '1440px',
  [breakpoints.down('sm')]: {
  width: '100%',
  height: '1280px'
    }, 
},
pageTitle: {
  position: 'absolute',
  top: '600px',
  left: '450px',
  color: theme.palette.common.orange900,
  opacity: 1.0,
  [breakpoints.down('sm')]: {
  top: '500px',
  left: '10px'
    }, 
},
paper: {
  margin:'20px',
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: theme.palette.common.light,
  textAlign: 'center',
  border: '5px solid #212121',
},
forms: {
  marginBottom: '400px'
},
subHeadings: {
  backgroundColor: theme.palette.common.green,
  border: '1px solid #212121',
  '&:hover': {
  backgroundColor: theme.palette.common.orange900,
    }
},
gymURLBtn:{
  fontStyle: 'bold',
  '&:hover': {
  backgroundColor: theme.palette.common.orange900,
  color: theme.palette.common.grey900,
  },
},
detailsHdr: {
  marginBottom: '20px',
},
paragraphs: {
  marginBottom: '20px'
}
}));

const {REACT_APP_CLOUD_HOST_URL} = process.env;
const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;

export default function GymDetails(props) {
  const classes = useStyles();
  

  const [gym, setGym] = useState({});
 
  useEffect(() => {
    async function fetchGym() {
      let path = props.location.state;
      console.log('testing')
      const response = await axios.get(process.env.NODE_ENV === 'production' ? `${cloudBaseUrl}${path}` : `http://localhost:8000${path}`, { withCredentials: true });
      setGym(response.data);
       console.log(response.data);
    }
    fetchGym();
  }, []);
 
  
  
  return (
    <Protected>
      <Box className={classes.fullSection}>
        <Box className={classes.wholeBox}>
          <Typography variant='h3' className={classes.pageTitle}>GYM & FITNESS CLUB DETAILS</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '200px',
          '& > :not(style)': {
            m: 1,
            width: '500px',
            height: '350px',
          },
        }}>
          <div className={classes.forms}>
              <Paper elevation={2} className={classes.paper}>
                  <Typography variant='h3' className={classes.detailsHdr}>{gym.gym_details}</Typography>
                  <Typography variant='h6' className={classes.subHeadings}>Quality, Affordable Gyms, Everywhere</Typography>
                  <Typography className={classes.paragraphs}>{gym.quality}</Typography>
                  <Typography variant='h6' className={classes.subHeadings}>24/7 Access</Typography>
                  <Typography className={classes.paragraphs}>{gym.access}</Typography>
                  <Typography variant='h6' className={classes.subHeadings}>Largest Network of Gyms in the UK</Typography>
                  <Typography className={classes.paragraphs}>{gym.network}</Typography>
                  <Typography variant='h6' className={classes.subHeadings}>No Contract, leave when you like</Typography>
                  <Typography className={classes.paragraphs}>{gym.contract}</Typography>
                  <Controls.ButtonCustom text="FIND OUT MORE" href={gym.gym_link} className={classes.gymURLBtn}/>
              </Paper>
            </div>
        </Box>
      </Box>
    </Protected>
  )
}

