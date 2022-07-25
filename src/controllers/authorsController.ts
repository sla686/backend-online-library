import { Request, Response } from "express";
import { CustomError } from "../types/ErrorType";

const getAllAuthors = (req: Request, res: Response) => {
  return res.send("Authors list");
};

const getSingleAuthor = (req: Request, res: Response) => {
  const { authorId } = req.params;
  if (authorId === "1") {
    throw new CustomError(401, "Author not found");
  }
  return res.send(`Author id is ${authorId}`);
};

export default { getAllAuthors, getSingleAuthor };
