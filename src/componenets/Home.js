import React from 'react';

const HomePage = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '50vh', overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1601363645678-0cbae97abb2c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Description of the image"
        style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop: '-50px' }}
      />
      <div style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        textAlign: 'center',
        color: 'skyblue',
        fontFamily: 'Merriweather serif'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50px', height: '2px', backgroundColor: 'skyblue', margin: '0 auto' }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <div style={{ width: '30px', height: '2px', backgroundColor: 'skyblue', margin: '0 auto' }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <div style={{ width: '70px', height: '2px', backgroundColor: 'skyblue', margin: '0 auto' }}></div>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontFamily: 'cursive',
        fontSize: '2rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center'
      }}>
        “Walking is the most perfect form of motion”
      </div>
    </div>
  );
};

export default HomePage;
