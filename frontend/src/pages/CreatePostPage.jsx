import React, { useEffect, useState } from "react";
import PostForm from "../components/PostForm";

const CreatePostPage = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const savedId = localStorage.getItem("userId");
    if (savedId) setUserId(savedId);
  }, []);

  return (
    <div className="page">
      <h1>Tweets</h1>

      {!userId ? (
        <p>Nenhum usuário encontrado! Cadastre-se!</p>
      ) : (
        <>
          <PostForm authorId={userId} onPostCreated={() => {}} />
        </>
      )}
    </div>
  );
};

export default CreatePostPage;
