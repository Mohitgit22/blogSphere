import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog</h1>
        <nav>
          <Link to="/" className="mx-4 hover:text-indigo-400">Home</Link>
          <Link to="/create" className="mx-4 hover:text-indigo-400">Create Post</Link>
          <Link to="/manage-posts" className="mx-4 hover:text-indigo-400">Manage Posts</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
