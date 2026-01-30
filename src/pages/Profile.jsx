import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [editBio, setEditBio] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Fetch profile data
  useEffect(() => {
    fetch("http://localhost:3000/profile/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setEditBio(data.bio || "");
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  // Save updated bio
  const handleSave = () => {
    fetch("http://localhost:3000/profile/1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bio: editBio }),
    })
      .then(() => {
        setUser((prev) => ({ ...prev, bio: editBio }));
        setIsEditing(false);
      })
      .catch((err) => console.error("Error saving bio:", err));
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src={user.profilePic || "/assets/profile_pics/default.png"}
          alt="profile"
          className="profile-pic"
          onError={(e) => (e.target.src = "/assets/profile_pics/default.png")}
        />
        <div className="profile-info">
          <h2>{user.username} (You)</h2>
          <div className="profile-stats">
            <span>
              <strong>{user.followers}</strong> followers
            </span>
            <span>
              <strong>{user.following}</strong> following
            </span>
          </div>

          {isEditing ? (
            <div>
              <textarea
                value={editBio}
                onChange={(e) => setEditBio(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <p className="profile-bio">{user.bio || "No bio yet."}</p>
          )}

          {!isEditing && (
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          )}
        </div>
      </div>

      <div className="profile-settings">
        <h3>Settings</h3>
        <ul>
          <li>Change Password</li>
          <li>Privacy</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
