import React from 'react';
import { Link } from 'react-router-dom';
import instaText from './assets/Instagram_text.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="logo-text" src={instaText} alt="Instagram" />
      
      <nav>
        <Link to="/" className="nav-link"><i className="bi bi-house-door-fill"></i> Home</Link>
        <div><i className="bi bi-search"></i> Search</div>
        <div><i className="bi bi-compass"></i> Explore</div>
        <div><i className="bi bi-film"></i> Reels</div>
        <Link to="/messages" className="nav-link"><i className="bi bi-chat-dots"></i> Messages</Link>
        <Link to="/notifications" className="nav-link"><i className="bi bi-heart"></i> Notifications</Link>
        <Link to="/create" className="nav-link"><i className="bi bi-plus-square"></i> Create</Link>
        <Link to="/profile" className="nav-link"><i className="bi bi-person-circle"></i> Profile</Link>
      </nav>

      <footer>
        <div><i className="bi bi-threads"></i> Threads</div>
        <div><i className="bi bi-list"></i> More</div>
      </footer>
    </div>
  );
}

export default Sidebar;
