import React from 'react';

const HomePage = () => {
  return (
    <div className="position-relative w-100" style={{ height: '50vh', overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1601363645678-0cbae97abb2c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Description of the image"
        className="img-fluid"
        style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop: '-50px' }}
      />
      <div className="position-absolute w-100 text-center text-skyblue" style={{ bottom: '20px', fontFamily: 'Merriweather, serif' }}>
        <div className="d-flex justify-content-center">
          <div className="bg-skyblue" style={{ width: '50px', height: '2px', margin: '0 auto' }}></div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <div className="bg-skyblue" style={{ width: '30px', height: '2px', margin: '0 auto' }}></div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <div className="bg-skyblue" style={{ width: '70px', height: '2px', margin: '0 auto' }}></div>
        </div>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{ fontFamily: 'cursive', fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        “Walking is the most perfect form of motion”
      </div>
    </div>
  );
};

export default HomePage;
