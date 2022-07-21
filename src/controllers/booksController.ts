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

const getSingleBook = async (req: Request, res: Response) => {
  await Book.find({ isbn: req.params.bookId }).then((data) => {
    res.json(data);
  });
};

const patchSinglebook = (req: Request, res: Response) => {
  return res.send("patch method for single book");
};

const deleteSinglebook = async (req: Request, res: Response) => {
  await Book.deleteOne({ isbn: req.params.bookId })
    .then
    // console.log("successfully deleted")
    ();
};

export default {
  getAllBooks,
  getSingleBook,
  patchSinglebook,
  postBooks,
  deleteSinglebook,
};
