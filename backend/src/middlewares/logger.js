export const logger = (req, res, next) => {
  const now = new Date().toLocaleString('pt-BR');
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
};
