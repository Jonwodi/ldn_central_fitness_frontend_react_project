import { AppBar, Box, Drawer, Typography, IconButton, Divider, List, ListItem, ListItemText, Toolbar, Hidden} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { useHistory } from 'react-router';
import axios from 'axios';


const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({

  container: {
    ...theme.container,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    maxWidth: '100%'
  },
  fullNav: {
    maxWidth: '100%',
  },
  loginBox: { 
    marginLeft: 'auto',
    [breakpoints.down('sm')]: {
      marginLeft: '0'
    }
  },
    drawerHeader: {
    backgroundColor: '#212121',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   ...theme.mixins.toolbar,
    padding: theme.spacing(0,17),
    [breakpoints.down('sm')]: {
      padding: theme.spacing(0,1),
    }, 
  },
  icons: {
    '&:hover': {
      color: theme.palette.common.green,
    },
    '&.MuiSvgIcon-root': {
      fontSize: '27px'
    }
  },
iconText: {
  color: '#FFF',
  '&:hover': {
    color: theme.palette.common.green,
  }
},
drawerCloseIcon: {
  color: '#e65100',
  '&:hover': {
    color: theme.palette.common.green,
  }
},
logo: {
  ...theme.fonts.special,
  margin: 'auto',
  color: theme.palette.common.light,
 '&:hover': {
    color: theme.palette.common.orange900,
  }
},
menu: {
  marginRight: 'auto'
},
}));

export default function Navbar() {
  const classes = useStyles();

  const history = useHistory();

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }

  const { REACT_APP_CLOUD_HOST_URL } = process.env;
  const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;


  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      if (process.env.NODE_ENV === 'development') {
        await axios.delete('http://localhost:8000/session/', { withCredentials: true });
      } 
      else if (process.env.NODE_ENV === 'production') {
        await axios.delete(`${cloudBaseUrl}/session/`, { withCredentials: true });
      }
      // props.history not used because Navbar is not defined in Routes and doesn't 
      // have ...props passed into it
      history.push('/login');
    } catch (err) {
      console.log(err)
    }
  }

  const routes = [
  {name: 'Home', Link: '/', index: 0},
  {name: 'About Us', Link: '/about-us', index: 1},
  {name: 'Gym Partnerships', Link: '/gym-partnerships', index: 2},
  {name: 'City Bikes', Link: '/city-bikes', index: 3},
  {name: 'Contact us', Link: '/contact-us', index: 4},
  {name: 'Logout', Link: '/login', index: 5}
];

  return (
   <Box className={classes.fullNav}>
      <AppBar position="static">  
          <Drawer variant='temporary' anchor="left" open={openDrawer}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon color='primary' className={classes.drawerCloseIcon}/>
              <Typography className={classes.drawerCloseIcon}>CLOSE</Typography>
            </IconButton>
          </div>
          <Divider />
            <List>
            {routes.map((route, index) => (
            <ListItem key={`${route}${index}`} component={Link} to={route.Link} selected={window.location.pathname === route.Link} onClick={handleDrawerClose} button>
              <ListItemText primary={route.name} className={classes.drawerCloseIcon} />
            </ListItem>))}
            </List>
          </Drawer>
          <Toolbar className={classes.container}>
              <IconButton onClick={handleDrawerOpen} className={classes.menu}>
                <MenuIcon color='secondary' edge='start' arial-label='menu' className={classes.icons} />
                <Typography className={classes.iconText}>MENU</Typography>
              </IconButton>
                <IconButton component={Link} to={'/'}>
                <Typography variant='h6' align='center' className={classes.logo}>LDN Central Fitness Club</Typography>
              </IconButton>
              <Box className={classes.loginBox}>
                <IconButton component={Link}to={'/login'}>
                  <PersonIcon color="secondary" className={classes.icons} />
                  <Typography className={classes.iconText}>LOG IN</Typography>
                </IconButton>
                <Hidden smDown>
                  <IconButton  onClick={handleLogout}>
                    <ExitToAppIcon color="secondary" className={classes.icons}/>
                    <Typography className={classes.iconText}>LOGOUT</Typography>
                  </IconButton>
                </Hidden>
              </Box>
          </Toolbar>
      </AppBar>
    </Box>
  )
}
