import React from 'react';
import '../css/navbar.css'; // Custom styling

const VisitPage = () => {
  return (
    <div className="container my-5">
      <div className="text-left">
        <h1 className="main-heading font-weight-bold">PLACE TO VISIT</h1>
        <h1 className="main-hea">IN AUTUMN</h1>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <div className="img-container position-relative">
              <img 
                src="https://images.unsplash.com/photo-1716718405882-5d80d89ea24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top rounded-circle mx-auto mt-3" 
                alt="Trail Image" 
                style={{ width: '250px', height: '250px' }} 
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
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <div className="img-container position-relative">
              <img 
                src="https://images.unsplash.com/photo-1716968921500-6bce26915c37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8" 
                className="card-img-top rounded-circle mx-auto mt-3" 
                alt="Trail Image" 
                style={{ width: '250px', height: '250px' }} 
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
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <div className="img-container position-relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1697729761115-052055452e85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top rounded-circle mx-auto mt-3" 
                alt="Trail Image" 
                style={{ width: '250px', height: '250px' }} 
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
      <div className="row">
        <div className="col-md-4 text-center">
          <button style={{ marginRight: '-710px', backgroundColor: 'skyblue' }}>See More</button>
        </div>
      </div>
    </div>
  );
}

export default VisitPage;
