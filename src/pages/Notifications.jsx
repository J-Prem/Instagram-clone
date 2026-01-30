import React, { useEffect, useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((note) => (
        <div key={note.id} className="notification-item">
          <img 
            src={note.profilePic} 
            alt={note.user} 
            className="notification-avatar-img" 
          />
          <div className="notification-text">
            <strong>{note.user}</strong> {note.action}
            <div className="notification-time">2h ago</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
