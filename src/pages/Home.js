import React from 'react';

import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="card bg-dark text-white m-5">
        <div className="card-header"> Home page</div>
        <div className="card-body">
          <h5 className="card-title">
            Trabalho prévio - Arquitetura javascript
          </h5>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos quisquam aliquid libero hic pariatur alias natus nulla
            officia doloremque unde dolor cum, saepe optio aspernatur odio quo
            aliquam minima ratione.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
