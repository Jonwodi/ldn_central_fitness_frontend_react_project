import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '16px',
    backgroundColor: theme.palette.common.grey900,
    color: theme.palette.common.light,
    padding: '13px 20px',
    borderRadius: '10px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.common.green,
    }
  }
}))

export default function ButtonCustom(props) {
  // Object Deconstructing
    const { text = 'Search', ...other } = props;
    const classes = useStyles();

  return (
    <Button
      classes={{ root: classes.root }}
      {...other}>
      {text}
    </Button>
  )
}