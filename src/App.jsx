import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Suggestions from './Suggestions';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Create from './pages/Create';
import Profile from './pages/Profile';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar-container"><Sidebar /></div>

        <div className="feed-container">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        <div className="suggestions-container"><Suggestions /></div>
      </div>
    </Router>
  );
}

export default App;
