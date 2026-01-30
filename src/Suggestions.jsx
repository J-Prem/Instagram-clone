import React, { useState } from 'react';

const initialSuggestions = [
  { id: 201, username: "ace", pic: "/src/assets/profile_pics/ace.jpg", followed: false, followers: 120 },
  { id: 202, username: "robin", pic: "/src/assets/profile_pics/robin.jpg", followed: false, followers: 300 },
  { id: 203, username: "brook", pic: "/src/assets/profile_pics/brook.jpg", followed: false, followers: 150 },
];

function Suggestions({ onFollowChange }) {
  const [suggestions, setSuggestions] = useState(initialSuggestions);

  const toggleFollow = (userId) => {
    setSuggestions((prev) =>
      prev.map((s) =>
        s.id === userId
          ? {
              ...s,
              followed: !s.followed,
              followers: s.followed ? s.followers - 1 : s.followers + 1,
            }
          : s
      )
    );

    if (onFollowChange) {
      onFollowChange(userId);
    }
  };

  return (
    <div className="suggestions">
      <h4>Suggestions for you</h4>
      {suggestions.map((s) => (
        <div className="suggestion" key={s.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <img src={s.pic} alt={s.username} className="dp" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0 }}>{s.username}</p>
            <small>{s.followers} followers</small>
          </div>
          <button
            onClick={() => toggleFollow(s.id)}
            style={{
              background: s.followed ? "grey" : "linear-gradient(135deg, #0df3ebff, #045cf4ff)",
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {s.followed ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
