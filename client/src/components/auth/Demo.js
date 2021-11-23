import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/authActions";

function DemoButton() {
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();

    await dispatch(
      signIn({
        email: "acey@acey.com",
        password: "aceyacey",
      })
    );
    <Navigate to='/inbox' />;
  };

  return (
    <button onClick={handleClick} type='submit' className='auth-btn'>
      Demo User
    </button>
  );
}

export default DemoButton;
