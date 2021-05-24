import { Request, Response, NextFunction } from "express";

export const validateQuery = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { query } = req;
  const requiredParams = ["filename", "width", "height"];
  for (let i = 0; i < requiredParams.length; i++) {
    if (!query[requiredParams[i]]) {
      next("Error, Input file missing");
    } else {
      next();
    }
  }
  return;
};
