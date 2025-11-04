import React, { useEffect, useState } from "react";
import api from "../services/api";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [authorId, setAuthorId] = useState(localStorage.getItem("userId") || "");
  const [loading, setLoading] = useState(false);

  const loadComments = async () => {
    try {
      const res = await api.get(`/comments/${postId}`);
      setComments(res.data);
      console.log(`[Frontend] Post ${postId} tem ${res.data.length} comentários`);
    } catch (err) {
      console.error("Erro ao carregar comentários:", err);
    }
  };

  useEffect(() => {
    if (postId) loadComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authorId || !text.trim()) return alert("Preencha todos os campos!");

    setLoading(true);
    try {
      const res = await api.post("/comments", { postId, authorId, text });
      console.log("[Frontend] Comentário enviado:", res.data);
      setText("");
      loadComments(); 
    } catch (err) {
      console.error("Erro ao enviar comentário:", err);
      alert("Erro ao enviar comentário!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-list-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          placeholder="Escreva seu comentário..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="3"
          className="comment-textarea"
        />
        <button
          type="submit"
          disabled={loading}
          className={`comment-button ${loading ? "loading" : ""}`}
        >
          {loading ? "Enviando..." : "Comentar"}
        </button>
      </form>

      <div className="comment-list">
        {comments.length === 0 ? (
          <p>Sem comentários ainda.</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="comment-item">
              <strong className="comment-author">
                @{c.author?.username || "Anônimo"}
              </strong>
              <p className="comment-text">{c.text}</p>
              <small className="comment-date">
                {new Date(c.createdAt).toLocaleString()}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentList;
