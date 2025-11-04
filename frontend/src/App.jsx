import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";
import SingupPage from "./pages/SingupPage";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/LogoTwtt.png" alt="Twitter" className="logo" />
          <h2>Twitter</h2>
        </div>

        <div className="navbar-right">
          <Link to="/signup">
            <i className="fa-solid fa-user-plus"></i> Cadastro
          </Link>
          <Link to="/">
            <i className="fa-solid fa-comments"></i> Tweets Recentes
          </Link>
          <Link to="/create">
            <i className="fa-solid fa-feather"></i> Twittar
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
