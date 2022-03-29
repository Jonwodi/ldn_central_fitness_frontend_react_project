import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import Controls from '../components/controls/Controls';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
grid: {
  display: 'grid',
  gridTemplateColumns: '1fr 110px',
  gridGap: '0.5rem',
  marginBottom: '200px'
},
button: {
  display: 'grid',
  alignItems: 'end',
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
  marginBottom: '100px'
},
}))

export default function PaperForm() {
  const classes = useStyles();

  return (
    <Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '200px',
          '& > :not(style)': {
            m: 1,
            width: '400px',
            height: '350px',
          },
        }}>
          <div className={classes.forms}>
            <Paper elevation={2} className={classes.paper}>
              <Typography variant='h3'>Choose from 290+ gyms and join today</Typography>
              <Typography variant='button'>Gyms across the UK are open. Plus, with 2 brand new gyms opening this autumn, your nearest LDN Central fitness club might be closer than you think! Find your nearest LDN Central fitness club and get started on your goals today.</Typography>
              <Controls.ButtonCustom text="JOIN NOW" href={'/join'} />
            </Paper>
          </div>
          <div className={classes.forms}>
            <Paper elevation={2} className={classes.paper}>
              <Typography variant='h3'>Choose from 290+ gyms and join today</Typography>
              <Typography variant='button'>Gyms across the UK are open. Plus, with 2 brand new gyms opening this autumn, your nearest LDN Central fitness club might be closer than you think! Find your nearest LDN Central fitness club and get started on your goals today.</Typography>
              <Controls.ButtonCustom text="JOIN NOW" href={'/join'} />
            </Paper>
          </div>
          <div className={classes.forms}>
            <Paper elevation={2} className={classes.paper}>
              <Typography variant='h3'>Choose from 290+ gyms and join today</Typography>
              <Typography variant='button'>Gyms across the UK are open. Plus, with 2 brand new gyms opening this autumn, your nearest LDN Central fitness club might be closer than you think! Find your nearest LDN Central fitness club and get started on your goals today.</Typography>
              <Controls.ButtonCustom text="FIND CLUB" href={'/city-bikes'} />
            </Paper>
          </div>
        </Box>
    </Box>
  )
}