import express from "express";

export const errorMiddleware = (
  req: express.Request,
  _res: express.Response,
  next: Function
) => {
  const { query } = req;
  const requiredParams = ["filename", "width", "height"];
  for (let i = 0; i < requiredParams.length; i++) {
    if (!query[requiredParams[i]]) {
      next('Error, Input file missing');
    }
    else {
      next();
    }
  }
};
