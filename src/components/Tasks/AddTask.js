import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f6",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddTask = () => {
  const classes = useStyles();

  return (
    <div>
      <form noValidate autoComplete='off' className={classes.formStyle}>
        <TextField
          id='enter-todo'
          label='Enter Task'
          variant='outlined'
          autoFocus
          fullWidth
        />
        <Button
          className={classes.submitButton}
          color='primary'
          variant='contained'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
