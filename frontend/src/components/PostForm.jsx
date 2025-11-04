import React, { useState } from "react";
import api from "../services/api";

const PostForm = ({ authorId, onPostCreated }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return alert("Nenhum pensamento?");

    try {
      const response = await api.post("/posts", { authorId, content });
      onPostCreated(response.data);
      setContent("");
    } catch (err) {
      console.error("Erro ao criar tweet:", err);
      alert("Não foi possível criar o tweet.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        placeholder="Escreva seus pensamentos por aqui... Liberdade de expressão né?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Postar!</button>
    </form>
  );
};

export default PostForm;
