import React from 'react';
import { CarouselData } from './CarouselData';
import { useState } from 'react';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { Box, IconButton } from '@material-ui/core';
import Controls from './controls/Controls';


const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
  allImages: { 
    position: 'relative',
    marginBottom: '50px',
    maxWidth: '100%',
    textAlign: 'center'
  },
   gymImages: {
      width: '100%',
     height: '1100px',
    [breakpoints.down('sm')]: {
      maxWidth: '100%',
      height: '475px',
    }
  },
   leftArrow: {
     position: 'absolute',
     top: '30%',
     left: '50px',
     color: theme.palette.common.green,
     '&:hover': {
        color: theme.palette.common.orange900
     }
  },
    rightArrow: {
      position: 'absolute',
      top: '30%',
      right: '50px',
      color: theme.palette.common.green,
      '&:hover': {
        color: theme.palette.common.orange900
      }
  },
    right: {
      fontSize: '100px',
      [breakpoints.down('sm')]: {
      fontSize: '75px'
      }
  },
    left: {
      fontSize: '100px',
      [breakpoints.down('sm')]: {
      fontSize: '75px'
      }
  },
    slide: {
      opacity: 0,
      transitionDuration: '1s ease',
      zIndex: 1
  },
    slideActive: {
      opacity: 1,
      transitionDuration: '1s',
  },
    boxes: {
      display: 'flex'
  },
    joinButton: {
    backgroundColor: theme.palette.common.green,
    color: theme.palette.common.light,
    fontSize: '50px',
    width: '280px',
    border: '5px double #FFF',
    position: 'relative',
    top: '-600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: 0.9,
      [breakpoints.down('sm')]: {
          position: 'relative',
          top: '-200px',
          width: '150px',
          fontSize: "25px",
          opacity: 0.9,
          marginLeft: 'auto',
          marginRight: 'auto'
      },
      '&:hover': {
          backgroundColor: theme.palette.common.orange900,
          opacity: 1
      }
  },
}));

export default function HeroCarousel({carouselsItems}) {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = carouselsItems.length;

  const nextPhoto = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevPhoto = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(carouselsItems) || carouselsItems.length <= 0) {
    return null;
  }
 

  return (
    <Box className={classes.allImages}>
      <IconButton edge='start' className={classes.leftArrow} onClick={prevPhoto}>
        <KeyboardArrowLeft className={classes.left}/>
      </IconButton>
      <IconButton edge='start' className={classes.rightArrow} onClick={nextPhoto}>
        <KeyboardArrowRight className={classes.right}/>
      </IconButton>
      {CarouselData.map((carousel, index) => {
        return (
          <Box className={index === current ? 'slideActive' : 'slide'} key={index}>
            {index === current && (<img src={carousel.image} alt='gym' className={classes.gymImages}/>)}
          </Box>
        )
      })}
             <Controls.JoinButtonCustom  className={classes.joinButton}/>
    </Box> 
  )
}
