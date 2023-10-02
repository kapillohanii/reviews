import React, { useState } from "react";
import "./postreview.css"; // Import the CSS file for styling


const PostReview = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send it to the server)
    console.log("Title:", title);
    console.log("Description:", description);
    // Reset form fields
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Beautiful Formz</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" >Course</label>
          <select className="select" value="Select Course">
            <option selected value="default">
            Select Course
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Review</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a description"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Post
        </button>
      </form>      
    </div>
  );
};

export default PostReview;
