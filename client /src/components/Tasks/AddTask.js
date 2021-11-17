import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";

import { addTask } from '../../store/actions/taskActions'


const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddTask = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [task, setTask] = useState({
    name: "",
    isComplete: false
  })

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask(task))
    
    setTask({
      name: "",
      isComplete: false
    })
  }

  return (
    <>
      <form noValidate autoComplete='off' className={classes.formStyle} onSubmit = {handleSubmit}>
        <TextField id='enter-todo' label='enterTodo' autoFocus fullWidth 
           value={task.name}
           onChange={(e) => setTask({...task, name: e.target.value, date: new Date() })}/>
        <Button
          color='primary'
          variant='contained'
          type='submit'
          className={classes.submitButton}
    

        >
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddTask;
