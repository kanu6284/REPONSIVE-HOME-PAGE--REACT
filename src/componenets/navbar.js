import React from 'react';
import '../css/navbar.css'; // Custom styling

const Navbar = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <div style={{ position: 'absolute', top: '20%', left: '2%', textAlign: 'left' }}>
        <h1 style={{ fontWeight: 'bold', marginBottom: '0' }}>Discover your</h1>
        <h1 style={{ fontWeight: 'bold', marginTop: '0' }}>next hike</h1>

        <h6 style={{ marginTop: '20px', marginBottom: '10px' }}>Discover your</h6>
        <h6 style={{ marginBottom: '20px' }}>next hike</h6>

        <p style={{ margin: '0' }}>Lorem ipsum dolor sit amet aplettes and</p>
        <p style={{ margin: '0' }}>Lorem ipsum dolor sit amet support</p>
        <p style={{ margin: '0' }}>Lorem ipsum dolor</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1453025461931-ff31468730a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWtraW5nJTIwaW1hZ2VzJTIwd2l0aCUyMHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Background"
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: -1 }}
      />
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1, paddingLeft: '20px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Haking Life</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Class</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Promo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Online Class</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
