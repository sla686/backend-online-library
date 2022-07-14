import { Request, Response } from "express";
import { CustomError } from "ErrorType";
import uuid from "uuid4";
import Book from "BookType";

const getAllBooks = (req: Request, res: Response) => {
  return res.send("response: books list!!!");
};

const postBooks = (req: Request, res: Response) => {
  const { title, description, publisher, authors, status, published_date } =
    req.body;
  const newBook: Book = {
    isbn: uuid(),
    title,
    description,
    publisher,
    authors,
    status,
    published_date,
  };
  return res.status(201).json(newBook);
};
/********************SINGLE BOOK *********************** */

const getSingleBook = (req: Request, res: Response) => {
  return res.send(`response:${req.params.bookId}`);
};

const patchSinglebook = (req: Request, res: Response) => {
  return res.send("patch method for single book");
};

const deleteSinglebook = (req: Request, res: Response) => {
  return res.send("delete method for single book");
};

export default { getAllBooks, getSingleBook, patchSinglebook, postBooks };
