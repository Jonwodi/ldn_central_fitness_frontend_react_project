import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const alpha = '#2C3E50';
const beta = '#0A7ED2';
const gamma = '#1D2730';
const delta = '#EDEDED';
const alert = '#FD5959';
const contrast = '#E84188';
const elements = '#C4C4C4';
const light = '#FFF';
const skills = '#e1e1e1';
const green = '#1de9b6';
const grey900 = '#212121';
const orange900 = '#e65100';

export default createTheme({
  typography: {
    fontFamily: 'GemunuLibre-ExtraBold',
  },
  palette: {
    primary: {
      main: `${grey900}`,
    },
    secondary: {
      main: `${light}`,
    },
    error: {
      main: `${alert}`,
    },
    common: {
      alpha: `${alpha}`,
      beta: `${beta}`,
      gamma: `${gamma}`,
      delta: `${delta}`,
      alert: `${alert}`,
      contrast: `${contrast}`,
      elements: `${elements}`,
      light: `${light}`,
      skills: `${skills}`,
      green: `${green}`,
      grey900: `${grey900}`,
      orange900: `${orange900}`,
    },
    background: {
      // site's background colour
      default: `${orange900}`
    }
  },
  container: {
    width: '900px',
    margin: '0 auto',
    padding: '0',
    [breakpoints.down('sm')]: {
      width: '100%',
    }, 
  [breakpoints.down('md')]: {
     padding: 'o 20px',
    },
  },
    fonts: {
      bold: {
        fontFamily: 'GemunuLibre-Bold',
      },
      extraBold: {
        fontFamily: 'GemunuLibre-ExtraBold',
      }, 
      
      light: {
        fontFamily: 'GemunuLibre-Medium',
      },
      special: {
        fontFamily: 'Lobster-Regular',
      }
    },
  });