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
  left: '390px',
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
  marginBottom: '40px',
  backgroundColor: theme.palette.common.light,
  textAlign: 'center',
  border: '5px solid #212121',
},
forms: {
  marginBottom: '100px'
},
btn: {
  marginTop: '40px'
},
}));

const { REACT_APP_CLOUD_HOST_URL} = process.env;
const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;

export default function GymPartnerships(props) {
  const classes = useStyles();
  

  const [gyms, setGyms] = useState([]);

  const handleClick = (gymId) => {
    props.history.push({
      pathname: '/gym-details',
      state: `/gyms/${gymId}`
    })
  }
 
  useEffect(() => {
    async function fetchGyms() {
      const response = await axios.get(process.env.NODE_ENV === 'production' ? `${cloudBaseUrl}/gyms/` : `http://localhost:8000/gyms/`, { withCredentials: true });
      setGyms(response.data);
    }
    fetchGyms();
  }, []);
  console.log(gyms);
  
  return (
    <Protected>
      <Box>
          <Box className={classes.wholeBox}>
            <Typography variant='h3' className={classes.pageTitle}>GYM & FITNESS CLUB PARTNERSHIPS</Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '100px',
            '& > :not(style)': {
            m: 1,
            width: '400px',
            height: '350px',
            },
            }}>
          {
            gyms.map((gym) =>
              <div className={classes.forms}>
                <Paper elevation={2} className={classes.paper}>
                  <Typography variant='h3'>{gym.name}</Typography>   
                  <Typography variant='button'>{gym.description}</Typography>
                  <Controls.ButtonCustom text="LEARN MORE" onClick={() => handleClick(gym.id)} className={classes.btn} />
                </Paper>
              </div>
            )
          }
        </Box>
      </Box>
    </Protected>
  )
}

