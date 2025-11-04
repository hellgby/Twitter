import { Comment, User, Post } from "../models/associations.js";

export const createComment = async (req, res) => {
  try {
    const { postId, authorId, text } = req.body;
    if (!postId || !authorId || !text) return res.status(400).json({ message: "Todos os campos são obrigatórios" });

    const post = await Post.findByPk(postId);
    const user = await User.findByPk(authorId);
    if (!post) return res.status(404).json({ message: "Post não encontrado" });
    if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

    const comment = await Comment.create({ postId, authorId, text });

    const commentsCount = await Comment.count({ where: { postId } });
    console.log(`[Backend] Post ${postId} agora tem ${commentsCount} comentários`);

    const commentWithAuthor = await Comment.findByPk(comment.id, {
      include: [{ model: User, as: "author", attributes: ["id", "username"] }]
    });

    res.status(201).json(commentWithAuthor);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar comentário", error: err.message });
  }
};

export const listCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.findAll({
      where: { postId },
      include: [{ model: User, as: "author", attributes: ["id", "username"] }],
      order: [["createdAt", "DESC"]],
    });

    console.log(`[Backend] Carregando ${comments.length} comentários para o post ${postId}`);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: "Erro ao listar comentários", error: err.message });
  }
};
