export const errorHandler = (err, req, res, next) => {
  console.error('Erro detectado:', err.message);
  res.status(500).json({ message: 'Erro interno no servidor.' });
};
