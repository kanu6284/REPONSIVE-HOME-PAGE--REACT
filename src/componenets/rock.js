
import React from 'react';

const RockActivities = () => {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 order-md-2 text-center text-md-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src="https://i.pinimg.com/736x/76/cf/cd/76cfcd94db1c52195faa5ecd3ce7d689.jpg" 
              alt="Mountain" 
              className="img-fluid mb-3"
              style={{ width: '50%', height: 'auto', borderRadius: '50%', aspectRatio: '1', marginBottom: '20px' }} 
            />
            <div style={{ textAlign: 'left', paddingLeft: '10px', width: '100%' }}>
              <h2 style={{ fontFamily: 'cursive', color: 'orange', margin: '0' }}>Mountainig As</h2>
              <h2 style={{ fontFamily: 'cursive', color: 'orange', margin: '0' }}>Nature Is Recreational</h2>  
              <h2 style={{ fontFamily: 'cursive', color: 'orange', margin: '0' }}>Activities</h2>        
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <h2 style={{ fontFamily: 'cursive' }}>ROCK</h2>
            <h2 style={{ fontFamily: 'cursive' }}>CLIMBING</h2>
            <h4 style={{ fontFamily: 'cursive', marginTop: '40px' }}>1.CLASSES & EVENTS</h4>

            <p style={{ marginTop: '20px' }}>This topic will be an exclusive one that will provide you the answers of Guess Their Answer. Name some mountain activities. This game is developed for iOS devices and it becomes famous in mind games.</p>
            <div className="row">
              <div className="col-md-6 text-left">
                <p className="mb-1" style={{ marginBottom: '40px' }}><strong>Start Date:</strong> April 15</p>
                <p className="mb-1" style={{ marginBottom: '40px' }}><strong>Price:</strong> $900</p>
              </div>
              <div className="col-md-6 text-left">
                <p className="mb-1" style={{ marginBottom: '70px' }}><strong>Duration:</strong> 20 hours</p>
                <p className="mb-1" style={{ marginBottom: '70px' }}><strong>Mode:</strong> In-person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RockActivities;