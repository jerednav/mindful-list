import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import Tasks from "./components/Tasks/Tasks";
import Navbar from "./components/navbar/NavBar";
import SignUp from "./components/auth/SignUp";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Sidebar from "./components/Sidebar/Sidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadUser } from "./store/actions/authActions";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />

      <Container maxWidth='md'>
        <Navbar />
        <Container className={classes.contentStyle} maxWidth='sm'>
          <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route exact path='/' element={<Tasks />} />
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
