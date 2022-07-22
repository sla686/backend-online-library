import { Request, Response } from "express";
import { CustomError } from "ErrorType";
import uuid from "uuid4";
import BookType from "BookType";
import Book from "../models/books";
import { isObjectIdOrHexString } from "mongoose";

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
  await Book.findById({ isbn: req.params.bookId }).then((data) => {
    res.json(data);
  });
};

const patchSinglebook = async (req: Request, res: Response) => {
  const id = req.params.bookId;
  const postBookData: BookType = req.body;

  // if (ObjectId.isValid(req.params.id)) {}

  // const book = await Book.findByIdAndUpdate(id, postBookData, { new: true });
  // if (book) {
  //   res.send(book);
  // }
};

const deleteSinglebook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  await Book.deleteOne({ isbn: req.params.bookId });

  console.log(await Book.countDocuments({ isbn: bookId })); // 0
};

export default {
  getAllBooks,
  getSingleBook,
  patchSinglebook,
  postBooks,
  deleteSinglebook,
};
