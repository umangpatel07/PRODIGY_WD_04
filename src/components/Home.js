import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-photo">
        <img src="https://dummyimage.com/600x400/000/fff&text=Umang+R+Patel" alt="Profile" />
      </div>
      <div className="home-content">
        <h1>Hello, I'm Umang R Patel</h1>
        <p>I'm a Web Developer specializing in building and designing exceptional digital experiences.</p>
      </div>
    </div>
  );
};

export default Home;
