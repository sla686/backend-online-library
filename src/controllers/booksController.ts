import { Request, Response } from "express";
import { CustomError } from "ErrorType";
import uuid from "uuid4";
import BookType from "BookType";
import Book from "../models/books";

const getAllBooks = async (req: Request, res: Response) => {
  const books = await Book.find();
  res.json(books);
};
const postBooks = async (req: Request, res: Response) => {
  const { title, description, publisher, authors, status, published_date } =
    req.body;
  const newBook = await Book.create({
    isbn: uuid(),
    title,
    description,
    publisher,
    authors,
    status,
    published_date,
  }).then((data) => {
    res.json(data);
  });
};
/********************SINGLE BOOK *********************** */

const getSingleBook = (req: Request, res: Response) => {
  return res.send(`response:${req.params.bookId}`);
};

const patchSinglebook = (req: Request, res: Response) => {
  return res.send("patch method for single book");
};

const deleteSinglebook = (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  return res.send("delete method for single book");
};

export default {
  getAllBooks,
  getSingleBook,
  patchSinglebook,
  postBooks,
  deleteSinglebook,
};
