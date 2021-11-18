import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Typography } from "@material-ui/core";
import Task from "./Task";
import { makeStyles } from "@material-ui/styles";

import { getTasks } from '../../store/actions/taskActions'

const useStyles = makeStyles({
  todosStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const TaskList = ({task, setTask}) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const tasks = useSelector((state)=> state.tasks)

    
    useEffect(() => {
      dispatch(getTasks())
    }, [dispatch])

  return (
    <>
      <div className={classes.todosStyle}>
        <Typography variant='h5'>
        { tasks.length > 0 ? "theTasks" : "noTodosYet" }
        </Typography>
        {tasks && tasks.map((task)=> {
          return (
            <Task 
            task={task}
            key={task._id}
            setTask={setTask}
            tasks={tasks}
            />
          )
        })}
      </div>
    </>
  );
};

export default TaskList;
