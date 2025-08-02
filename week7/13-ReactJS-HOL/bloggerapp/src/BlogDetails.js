
import React, { Component } from "react";

class BlogDetails extends Component {
  render() {
    const blogs = [
      { id: 1, title: "Learning React", date: "2025-07-31" },
      { id: 2, title: "Using JSX Effectively", date: "2025-08-01" },
    ];

    return (
      <div>
        <h2>Blog Posts</h2>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ marginBottom: "10px" }}>
            <h4>{blog.title}</h4>
            <p>Date: {blog.date}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BlogDetails;
