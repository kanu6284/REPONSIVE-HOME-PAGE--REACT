import React from 'react';
import '../css/navbar.css'; // Custom styling

const VisitPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="main-heading font-weight-bold">PLACE TO VISIT</h1>
        <h1 className="main-hea">IN AUTUMN</h1>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
          <div className="card h-100 text-center">
            <div className="img-container position-relative">
              <img 
                src="https://images.unsplash.com/photo-1716718405882-5d80d89ea24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top rounded-circle mt-3" 
                alt="Trail Image" 
                style={{ width: '230px', height: '250px', objectFit: 'cover' }} 
              />
              <div className="blue-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-body">
              <h6 className="su-he font-weight-bold"><b>Mountain Loop</b></h6>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <hr style={{ borderTop: '1px solid black', margin: '20px 0' }} />
              <div className="text-center">
                <p>Location: 0.3 miles</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
          <div className="card h-100 text-center">
            <div className="img-container position-relative">
              <img 
                src="https://images.unsplash.com/photo-1716369413929-040f0d767e72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top rounded-circle mt-3" 
                alt="Trail Image" 
                style={{ width: '230px', height: '250px', objectFit: 'cover' }} 
              />
              <div className="blue-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-body">
              <h6 className="su-he font-weight-bold"><b>National Park</b></h6>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <hr style={{ borderTop: '1px solid black', margin: '20px 0' }} />
              <div className="text-center">
                <p>Location: 0.3 miles</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
          <div className="card h-100 text-center">
            <div className="img-container position-relative">
              <img 
                src="https://images.unsplash.com/photo-1716847214623-c45b2db2d569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top rounded-circle mt-3" 
                alt="Trail Image" 
                style={{ width: '230px', height: '250px', objectFit: 'cover' }} 
              />
              <div className="blue-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-body">
              <h6 className="su-he font-weight-bold"><b>Canyon Tail</b></h6>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <hr style={{ borderTop: '1px solid black', margin: '20px 0' }} />
              <div className="text-center">
                <p>Location: 0.3 miles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <button className="btn btn-primary" style={{ backgroundColor: 'skyblue', borderColor: 'skyblue' }}>See More</button>
        </div>
      </div>
    </div>
  );
}

export default VisitPage;
