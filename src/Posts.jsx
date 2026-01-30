import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [openPostId, setOpenPostId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err));
  }, []);

  const toggleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  const toggleFollow = (userId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.user.id === userId
          ? { ...post, user: { ...post.user, followed: !post.user.followed } }
          : post
      )
    );
  };

  const toggleComments = (postId) => {
    setOpenPostId(openPostId === postId ? null : postId);
  };

  const filteredPosts = posts.filter(post =>
    post.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='search-container'>
      <input
        type="text"
        className='search-input'
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
      /></div>

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id} className="post-card">
            <div className='username' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img className='dp m-1' src={post.user.profilePic} alt="profile" style={{ width: "40px", borderRadius: "50%" }} />
                <h5 style={{ marginLeft: "8px" }}>{post.user.username}</h5>
              </div>
              <button
                onClick={() => toggleFollow(post.user.id)}
                style={{
                  background: post.user.followed ? "grey" : "linear-gradient(135deg, #0df3ebff, #045cf4ff)",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                {post.user.followed ? "Following" : "Follow"}
              </button>
            </div>

            <div className='post-img'>
              <img src={post.image} alt="post" style={{ width: "100%",borderRadius:"10px" }} />
            </div>

            <div className='like'>
              <span>
                <i
                  className={post.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"}
                  onClick={() => toggleLike(post.id)}
                  style={{ cursor: "pointer", fontSize: "20px" }}
                ></i>
              </span>
              <span className='count'><b>{post.likes}</b></span>
              <span>
                <i className="bi bi-chat" onClick={() => toggleComments(post.id)} style={{ cursor: "pointer", marginLeft: "10px" }}></i>
                <span className='count'>{post.comments.length}</span>
                <i className="bi bi-send" style={{ marginLeft: "10px" }}></i>
              </span>
              <h6>{post.caption}</h6>
            </div>

            {openPostId === post.id && (
              <div className="comments">
                {post.comments.map((comment, index) => (
                  <p key={index}>
                    <b>{comment.user}</b>: {comment.comment}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Posts;
