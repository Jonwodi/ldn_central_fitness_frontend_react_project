import { Box, makeStyles } from "@material-ui/core";
import React from "react";
// import LoginForm from "../components/LoginForm";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import TailwindLoginForm from "../components/TailwindLoginForm";

const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
  LoginSection: {
    [breakpoints.down("sm")]: {
      marginBottom: "500px",
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Box className={classes.LoginSection}>
      {/* <LoginForm /> */}
      <TailwindLoginForm />
    </Box>
  );
}
