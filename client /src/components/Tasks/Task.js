import React from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import moment from 'moment'

const useStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  grayStyle: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Task = ({ task, setTask }) => {
  const classes = useStyles();

  const handleUpdateClick = () => {
    setTask(task)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className={classes.todoStyle}>
        <div>
          {task.isComplete ? (<Typography variant='subtitle1' className={classes.checked}>{task.name}</Typography> )
          : (<Typography variant='subtitle1'>{task.name}</Typography>)
        }
          <Typography className={classes.grayStyle} variant='body2'>
            Author: Jered
          </Typography>
          <Typography className={classes.grayStyle} variant='body2'>
            Added: { moment(task.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size='small' aria-label='outlined primary button group'>
            { task.isComplete ? (            <Button>
              <CheckCircle className={classes.isComplete} color='action' />
            </Button>) :            
            ( <Button>
              <CheckCircle color='action' />
            </Button>)}

            <Button onClick={ () => handleUpdateClick() }>
              <Create color='primary' />
            </Button>
            <Button>
              <Delete color='secondary' />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Task;
