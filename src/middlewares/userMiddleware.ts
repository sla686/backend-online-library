import { Request, Response, NextFunction } from "express";

export const userRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Hi from middleware");
  next();
};

export const seconduserRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Hi from second request middleware");
  next();
};
