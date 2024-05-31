import React from 'react';

const MountainActivities = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 text-center text-md-left" style={{ display: 'flex', flexDirection: 'column', paddingLeft: '0', marginTop: '-50px' }}>
            <img 
              src="https://i.pinimg.com/736x/76/cf/cd/76cfcd94db1c52195faa5ecd3ce7d689.jpg" 
              alt="Mountain" 
              className="img-fluid mb-3"
              style={{ width: '50%', height: 'auto', borderRadius: '50%', aspectRatio: '1', marginBottom: '20px', alignSelf: 'flex-start' }} 
            />
            <div style={{ textAlign: 'left', paddingLeft: '10px', width: '100%' }}>
              <h2 style={{ fontFamily: 'cursive', color: 'skyblue', textTransform: 'lowercase', margin: '0' }}>mountainig as</h2>
              <h2 style={{ fontFamily: 'cursive', color: 'skyblue', textTransform: 'lowercase', margin: '0' }}>nature is recreational</h2>  
              <h2 style={{ fontFamily: 'cursive', color: 'skyblue', textTransform: 'lowercase', margin: '0' }}>activities</h2>        
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'cursive', marginBottom: '10px' }}>MOUNTAINEERING</h2>
            <h2 style={{ fontFamily: 'cursive', marginBottom: '20px' }}>ICE CLIMBING</h2>
            <p style={{ marginBottom: '40px' }}>
              This topic will be an exclusive one that will provide you the answers of Guess Their Answer. Name some mountain activities. 
              This game is developed for iOS devices and it becomes famous in mind games.
            </p>
            <hr style={{ marginBottom: '30px' }}/>
            <div className="row">
              <div className="col-md-6 text-left">
                <p className="mb-1" style={{ marginBottom: '30px' }}><strong>Start Date:</strong> April 15</p>
                <p className="mb-1" style={{ marginBottom: '30px' }}><strong>Price:</strong> $900</p>
              </div>
              <div className="col-md-6 text-left">
                <p className="mb-1" style={{ marginBottom: '30px' }}><strong>Duration:</strong> 20 hours</p>
                <p className="mb-1" style={{ marginBottom: '30px' }}><strong>Mode:</strong> In-person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MountainActivities;
