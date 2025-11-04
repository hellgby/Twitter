import React, { useState, useEffect } from "react";
import api from "../services/api";

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", username: "", bio: "" });
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users", form);
      const newUserId = res.data.id;

      localStorage.setItem("userId", newUserId);
      setUserId(newUserId);
      setMessage(`Usuário: ${res.data.username} (ID salvo!)`);

      setForm({ name: "", username: "", bio: "" });
      fetchUsers();
    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessage(
        "Erro: " + (error.response?.data?.message || "Não foi possível criar usuário.")
      );
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="page">
      <h1>Crie sua conta!</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome"
          onChange={handleChange}
          value={form.name}
          required
        />
        <input
          name="username"
          placeholder="Usuário"
          onChange={handleChange}
          value={form.username}
          required
        />
        <textarea
          name="bio"
          placeholder="Biografia"
          onChange={handleChange}
          value={form.bio}
        />
        <button type="submit">Cadastrar</button>
      </form>

      {message && <p>{message}</p>}

      <h2 style={{ marginTop: "30px" }}>Usuários Cadastrados</h2>
      <div className="user-list">
        {users.length === 0 ? (
          <p>Nenhum usuário cadastrado.</p>
        ) : (
          users.map((u) => (
            <div key={u.id} className="user-card">
              <strong>@{u.username}</strong>
              <small>Nome: {u.name}</small><br></br>
              <small>ID: {u.id}</small>
              {u.bio && <p>Bio: {u.bio}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SignupPage;
