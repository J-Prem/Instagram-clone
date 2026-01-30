import React from 'react';

const storyUsers = [
  { id: 1, name: "luffy", pic: "/src/assets/profile_pics/luffy.png" },
  { id: 2, name: "zoro", pic: "/src/assets/profile_pics/zoro.jpg" },
  { id: 3, name: "nami", pic: "/src/assets/profile_pics/nami.jpg" },
  { id: 4, name: "sanji", pic: "/src/assets/profile_pics/sanji.jpg" },
];

function Stories() {
  return (
    <div className="stories">
      {storyUsers.map(user => (
        <div key={user.id} className="story">
          <img src={user.pic} alt={user.name} className="story-pic" />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
