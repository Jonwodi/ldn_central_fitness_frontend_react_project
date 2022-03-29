import { Button } from '@material-ui/core';
import React from 'react';







export default function JoinButtonCustom(props) {
  const {text = 'JOIN NOW', ...other} = props;

  return (
    <Button variant='contained' href={'/join'} {...other}>
      {text}
    </Button>
  )
}
