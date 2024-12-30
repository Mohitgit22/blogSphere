

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-indigo-600 mb-4">{post.title}</h1>
      <p className="text-lg text-gray-800 mb-4">{post.content}</p>
      <small className="text-xs text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</small>
    </main>
  );
};

export default PostPage;
