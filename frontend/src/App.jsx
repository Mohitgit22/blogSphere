
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CreateEditPost from "./pages/CreateEditPost";
import PostManagement from "./components/PostManagement"; // Add this import for post management
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="app min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/create" element={<CreateEditPost />} />
            <Route path="/edit/:id" element={<CreateEditPost />} />
            <Route path="/manage-posts" element={<PostManagement />} /> {/* Add this route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

