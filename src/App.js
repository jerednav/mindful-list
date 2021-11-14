import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import Tasks from "./components/Tasks/Task";
import Navbar from "./components/layout/Navbar";
import SignUp from "./components/Auth/SignUp";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
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
