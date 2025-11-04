export const validateUser = (req, res, next) => {
  const { name, username } = req.body;
  if (!name || !username) {
    return res.status(400).json({ error: "Nome e username são obrigatórios." });
  }
  next();
};
