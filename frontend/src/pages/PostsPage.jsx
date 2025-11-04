import React, { useEffect, useState } from "react";
import api from "../services/api";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await api.get("/posts");
        setPosts(res.data);
      } catch (err) {
        console.error("Erro ao carregar tweet:", err);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="page" id="Tweets">
      <h1>Tweets recentes</h1>
      {posts.length === 0 ? (
        <p>Nada por aqui...</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostsPage;
