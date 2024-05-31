import React from 'react';
import '../css/navbar.css'; // Custom styling

const Footer = () => {
  return (
    <footer className="footer bg-white text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-start">
            <img src="/path-to-your-logo.png" alt="About" className="mb-3 footer-logo" style={{ fontWeight: 'bold' }} />
            <p style={{ marginBottom: '0.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p style={{ marginBottom: '0.5rem' }}>Phasellus imperdiet, nulla et dictum interdum.</p>
            <p style={{ marginBottom: '0.5rem' }}>Donec placerat vehicula risus.</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div className="row">
              <div className="col">
                <h5>Column 1</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">Link 1</a></li>
                  <li><a href="#" className="text-dark">Link 2</a></li>
                  <li><a href="#" className="text-dark">Link 3</a></li>
                </ul>
              </div>
              <div className="col">
                <h5>Column 2</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">Link 4</a></li>
                  <li><a href="#" className="text-dark">Link 5</a></li>
                  <li><a href="#" className="text-dark">Link 6</a></li>
                </ul>
              </div>
              <div className="col">
                <h5>Column 3</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-dark">Link 7</a></li>
                  <li><a href="#" className="text-dark">Link 8</a></li>
                  <li><a href="#" className="text-dark">Link 9</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#87CEEB', fontWeight: 900, textAlign: 'center', padding: '7px 0', marginBottom: '-50px' }}>

      </div>
    </footer>
  );
}

export default Footer;
