import { Post, User } from "../models/associations.js";

export const createPost = async (req, res) => {
  try {
    const { authorId, content } = req.body;
    if (!authorId || !content) return res.status(400).json({ message: "Autor e conteúdo são obrigatórios" });

    const user = await User.findByPk(authorId);
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const post = await Post.create({ authorId, content });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar post", error: err.message });
  }
};

export const listPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, as: "author", attributes: ["id", "username"] }],
      order: [["createdAt", "DESC"]],
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Erro ao listar posts", error: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: User, as: "author", attributes: ["id", "username"] },
        { model: Comment, as: "comments", include: [{ model: User, as: "author", attributes: ["id", "username"] }] }
      ]
    });
    if (!post) return res.status(404).json({ message: "Post não encontrado" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar post", error: err.message });
  }
};
