import { User } from "../models/associations.js";

export const createUser = async (req, res) => {
  try {
    const { name, username, bio } = req.body;

    if (!name || !username)
      return res.status(400).json({ message: "Nome e username são obrigatórios" });

    const existing = await User.findOne({ where: { username } });
    if (existing)
      return res.status(400).json({ message: "Username já existe" });

    const newUser = await User.create({ name, username, bio });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({
      message: "Erro ao cadastrar usuário",
      error: err.message,
    });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: "Erro ao listar usuários",
      error: err.message,
    });
  }
};
