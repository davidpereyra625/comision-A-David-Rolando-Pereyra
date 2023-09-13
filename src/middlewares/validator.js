import { validationResult } from "express-validator";
//Recupera y valida si hay error y si no hay, te devuelve a la ruta con next()
export const validator = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
