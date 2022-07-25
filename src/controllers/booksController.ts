import { NextFunction, Request, Response } from "express";
import { CustomError } from "ErrorType";
import uuid from "uuid4";
import BookType from "BookType";
import Book from "../models/books";
import { nextTick } from "process";

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (e) {
    return next(e);
  }
};
const postBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
      res.status(200).json(data);
    });
  } catch (e) {
    return next(e);
  }
};
/********************SINGLE BOOK *********************** */

const getSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Book.findById({ isbn: req.params.bookId }).then((data) => {
      res.status(200).json(data);
    });
  } catch (e) {
    return next(e);
  }
};

const patchSinglebook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.bookId;
    const postBookData = req.body;

    const book = await Book.findByIdAndUpdate(id, postBookData, { new: true });
    res.status(200).send(book);
  } catch (e) {
    return next(e);
  }
};

const deleteSinglebook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.bookId;
    await Book.deleteOne({ isbn: bookId });

    console.log(await Book.countDocuments({ isbn: bookId })); // 0
    return res.status(200).send("the book was deleted.");
  } catch (e) {
    return next(e);
  }
};

export default {
  getAllBooks,
  getSingleBook,
  patchSinglebook,
  postBooks,
  deleteSinglebook,
};
