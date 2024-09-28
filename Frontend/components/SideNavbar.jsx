import React from 'react'; // For any custom styling (minimal)

const SideNavbar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          width="40"
          height="40"
          className="me-2"
        />
        <span className="fs-4">Instagram</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            <i className="bi bi-house-door-fill me-2"></i> Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i className="bi bi-search me-2"></i> Search
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i className="bi bi-compass me-2"></i> Explore
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i className="bi bi-film me-2"></i> Reels
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i className="bi bi-chat-dots me-2"></i> Messages
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i className="bi bi-bell me-2"></i> Notifications
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            <i className="bi bi-person-circle me-2"></i> Profile
          </a>
        </li>
        <li>
          <a href="/login" className="nav-link text-dark">
            <i className="bi bi-box-arrow-right"></i> Logout
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default SideNavbar;
