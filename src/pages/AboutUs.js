import { Box, Typography, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Controls from '../components/controls/Controls';

const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
aboutSection: {
  maxWidth: '100%',
  [breakpoints.down('sm')]: {
    marginBottom: '1100px'
  }
},
wholeBox: {
  marginBottom: '50px',
  textAlign: 'center',
  backgroundImage: 'url(./images/photo4.jpg)',
  backgroundRepeat: 'no-repeat',
  opacity: 0.8,
  '&:hover': {
    opacity: 1,
  },
  height: '1280px',
  maxWidth: '100%',
  [breakpoints.down('sm')]: {
      maxWidth: '100%',
      height: '1280px',
  }
},
pageTitle: {
  paddingTop:'500px',
  margin: '0 auto',
  color: theme.palette.common.orange900,
  opacity: 1.0,
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
  marginBottom: '1500px',
},
subHeadings: {
backgroundColor: theme.palette.common.green,
border: '1px solid #212121',
  '&:hover': {
    backgroundColor: theme.palette.common.orange900,
  }
},
detailsHdr: {
  marginBottom: '20px',
},
paragraphs: {
  marginBottom: '20px'
}
}))

export default function AboutUs() {
  const classes = useStyles();
  
  
  return (
    <Box className={classes.aboutSection}>
      <Box className={classes.wholeBox}>
        <Typography variant='h3' className={classes.pageTitle}>ABOUT US</Typography>
      </Box>
       <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '200px',
        '& > :not(style)': {
          m: 1,
          maxWidth: '1000px',
          height: '350px',
          [breakpoints.down('sm')]: {
          maxWidth: '100%',
          height: '350px',
          }
        },
      }}>
          <div className={classes.forms}>
              <Paper elevation={2} className={classes.paper}>
                <Typography variant='h3' className={classes.detailsHdr}>What We Do</Typography>
                <Typography variant='h6' className={classes.subHeadings}>ABOUT LDN CENTRAL FITNESS CLUB</Typography>
                <Typography className={classes.paragraphs}>We’re passionate about making our clubs a comfortable and welcoming place to come together with friends, family and fellow members to maintain physical and mental health and wellness. Our clubs are also a place to relax and socialise and we encourage the sense of community and belonging that being part of a club can generate. Whether that’s with some quiet time in our serene spa facilities, getting to know new people by regularly attending a group exercise class, chatting to fellow members in the spa, or using our Clubrooms to meet as a group for coffee, at LDN Central Fitness Club, we’re much more than just a gym.</Typography>
                <Typography variant='h6' className={classes.subHeadings}>OUR VALUES</Typography>
                <Typography className={classes.paragraphs}>We’re passionate about making our clubs a comfortable and welcoming place to come together with friends, family and fellow members to maintain physical and mental health and wellness. Our clubs are also a place to relax and socialise and we encourage the sense of community and belonging that being part of a club can generate. Whether that’s with some quiet time in our serene spa facilities, getting to know new people by regularly attending a group exercise class, chatting to fellow members in the spa, or using our Clubrooms to meet as a group for coffee, at LDN Central Fitness Club, we’re much more than just a gym.</Typography>
                <Typography variant='h6' className={classes.subHeadings}>OUR HISTORY</Typography>
                <Typography className={classes.paragraphs}>We’re passionate about making our clubs a comfortable and welcoming place to come together with friends, family and fellow members to maintain physical and mental health and wellness. Our clubs are also a place to relax and socialise and we encourage the sense of community and belonging that being part of a club can generate. Whether that’s with some quiet time in our serene spa facilities, getting to know new people by regularly attending a group exercise class, chatting to fellow members in the spa, or using our Clubrooms to meet as a group for coffee, at LDN Central Fitness Club, we’re much more than just a gym.</Typography>
                <Typography variant='h6' className={classes.subHeadings}>ENVIRONMENTAL, SOCIAL AND GOVERNANCE</Typography>
                <Typography className={classes.paragraphs}>We’re passionate about making our clubs a comfortable and welcoming place to come together with friends, family and fellow members to maintain physical and mental health and wellness. Our clubs are also a place to relax and socialise and we encourage the sense of community and belonging that being part of a club can generate. Whether that’s with some quiet time in our serene spa facilities, getting to know new people by regularly attending a group exercise class, chatting to fellow members in the spa, or using our Clubrooms to meet as a group for coffee, at LDN Central Fitness Club, we’re much more than just a gym.</Typography>
                <Typography variant='h6' className={classes.subHeadings}>GYMS & FITNESS CLUBS WE WORK WITH.</Typography>
                <Typography className={classes.paragraphs}>We’re passionate about making our clubs a comfortable and welcoming place to come together with friends, family and fellow members to maintain physical and mental health and wellness. Our clubs are also a place to relax and socialise and we encourage the sense of community and belonging that being part of a club can generate. Whether that’s with some quiet time in our serene spa facilities, getting to know new people by regularly attending a group exercise class, chatting to fellow members in the spa, or using our Clubrooms to meet as a group for coffee, at LDN Central Fitness Club, we’re much more than just a gym. Click learn more to found more about our partner gyms & fitness clubs.</Typography>
                <Controls.ButtonCustom text="LEARN MORE" href={'/gym-partnerships'}/>
              </Paper>
            </div>
       </Box>
    </Box>
  )
}
