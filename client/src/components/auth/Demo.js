import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/authActions";

function DemoButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    await dispatch(
      signIn({
        email: "acey@acey.com",
        password: "aceyacey",
      })
    );
    navigate("/inbox");
  };

  return (
    <button onClick={handleClick} type='submit' className='auth-btn'>
      Demo User
    </button>
  );
}

export default DemoButton;
