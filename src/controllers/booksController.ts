import { Request, Response } from "express";
import { CustomError } from "ErrorType";
import uuid from "uuid4";
const getAllBooks = (req: Request, res: Response) => {
  return res.send("response: books list!!!");
};

/********************SINGLE BOOK *********************** */

const getSingleBook = (req: Request, res: Response) => {
  return res.send(`response:${req.params.bookId}`);
  console.log(`response:${req.params.bookId}`);
};

const postSinglebook = (req: Request, res: Response) => {
  const newBook = {
    isbn: uuid(),
    title: req.body.title,
    description: req.body.description,
    publisher: req.body.publisher,
    authors: req.body.authors,
    status: req.body.status,
    published_date: req.body.published_date,
  };

  if (!newBook.isbn) {
    res.status(400).json({ msg: "please include isbn" });
  }
};

const patchSinglebook = (req: Request, res: Response) => {
  return res.send("patch method for single book");
};

const deleteSinglebook = (req: Request, res: Response) => {
  return res.send("delete method for single book");
};

export default { getAllBooks, getSingleBook, patchSinglebook, postSinglebook };
