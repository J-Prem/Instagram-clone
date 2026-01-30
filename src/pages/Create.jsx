import React, { useState } from "react";

function Create() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      alert(`Post created with caption: ${caption}`);
    } else {
      alert("Please select an image or video!");
    }
  };

  return (
    <div className="create-page">
      <h2>Create New Post</h2>
      <form className="create-form" onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <button type="submit">Share</button>
      </form>
    </div>
  );
}

export default Create;
