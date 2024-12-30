



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/posts")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post._id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <Link to={`/post/${post._id}`} className="block">
              <h2 className="text-xl font-semibold text-indigo-600">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.summary}</p>
              <small className="text-xs text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</small>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
