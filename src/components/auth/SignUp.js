import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignUp = () => {
  const classes = useStyles();

  return (
    <>
      <form noValidate autoComplete='off' className={classes.formStyle}>
        <Typography variant='h5'>Sign Up</Typography>
        <TextField
          className={classes.spacing}
          id='enter-name'
          label='enterName'
          variant='outlined'
          fullWidth
        />
        <TextField
          className={classes.spacing}
          id='enter-email'
          label='enterEmail'
          variant='outlined'
          fullWidth
        />

        <TextField
          className={classes.spacing}
          id='enter-password'
          type='password'
          label='enterPassword'
          variant='outlined'
          fullWidth
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.spacing}
          type='submit'
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;
