import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    bottom: "0px",
    backgroundColor: theme.palette.common.grey900,
    color: theme.palette.common.light,
    textAlign: "center",
    padding: "15px",
    fontSize: "25px",
  },
}));

export default function Footer({ props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      COPYRIGHT &copy; LDN Central Fitness Club 2021
    </div>
  );
}
