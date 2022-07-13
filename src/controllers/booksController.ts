import { Request, Response } from "express";
import { CustomError } from "ErrorType";

const getAllBooks = (req: Request, res: Response) => {
  return res.send("response: books list");
};

const getSingleBook = (req: Request, res: Response) => {
  const { bookId } = req.params;
  if (bookId === "1") {
    throw new CustomError(401, "Not user found");
  }
  return res.send(`response:${bookId}`);
};

export default { getAllBooks, getSingleBook };
