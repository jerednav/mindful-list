import React from "react";
import DemoButton from "../auth/Demo";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-header'>Minimal and simple task manager.</div>
        <div className='home-description'>
          Create and organize your daily tasks.
        </div>
        <div class='demobutton'>
          <DemoButton />
        </div>
        <div class='img'>
          <img
            src={process.env.PUBLIC_URL + "/home.png"}
            alt='Home page example'
            width='500px auto'
          />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
