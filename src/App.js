import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import Tasks from "./components/Tasks";
import Navbar from "./components/layout/Navbar";
import SignUp from "./components/Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
