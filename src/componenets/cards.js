import React from 'react';
import '../css/navbar.css'; // Custom styling

const Card = () => {
  return (
    <div className="container my-5">
      <h1 className="main-heading text-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="skyblue" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm.5 5.5a.5.5 0 0 1 .5.5v2.5h2.5a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0V11H4.5a.5.5 0 0 1 0-1H7V7.5a.5.5 0 0 1 .5-.5z"/>
        </svg> Hiking
      </h1>
      <h1 className="main-hea text-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="skyblue" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm.5 5.5a.5.5 0 0 1 .5.5v2.5h2.5a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0V11H4.5a.5.5 0 0 1 0-1H7V7.5a.5.5 0 0 1 .5-.5z"/>
        </svg> Classes
      </h1>

      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <img src="https://media.istockphoto.com/id/2132980525/photo/woman-in-autumn-outfit-photographing-outdoor-scene.webp?b=1&s=170667a&w=0&k=20&c=b0jtum7uHvOFcXEEs7Snj6yhPss9vVi7__-OsixSgAM=" className="card-img-top rounded-circle mx-auto mt-3" alt="..." style={{ width: '150px', height: '150px' }} />
            <div className="card-body">
              <h6 className="su-he"><b>Activity</b></h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <img src="https://media.istockphoto.com/id/482651073/photo/valley-of-flowers.webp?b=1&s=170667a&w=0&k=20&c=E5eDQGJTMGJy36Odtcc5FrJ3V9j3jZAk4nAQ0btRLiA=" className="card-img-top rounded-circle mx-auto mt-3" alt="..." style={{ width: '150px', height: '150px' }} />
            <div className="card-body">
              <h6 className="su-he"><b>Hiking</b></h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card h-100 text-center">
            <img src="https://media.istockphoto.com/id/648868332/photo/traveler-with-laptop-sits-on-top-view-point-on-the-mountain-valley.webp?b=1&s=170667a&w=0&k=20&c=a3ls0MIyVZSBFUkdcYABoZhYssOCM6jx9MuA0qFwKAk=" className="card-img-top rounded-circle mx-auto mt-3" alt="..." style={{ width: '150px', height: '150px' }} />
            <div className="card-body">
              <h6 className="su-he"><b>Camping</b></h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
