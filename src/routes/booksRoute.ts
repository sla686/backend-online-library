import { Router, Request, Response, NextFunction } from "express";

import booksController from "../controllers/booksController";

const booksRoute = Router();
booksRoute.get("/books", booksController.getAllBooks);
booksRoute.get("/books/:bookId", booksController.getSingleBook);
booksRoute.post("/books", booksController.postSinglebook);
// booksRoute.patch('/:bookId', booksController.patchSinglebook)
// booksRoute.delete("/books/:bookId", booksController.deleteSingleBook);

export default booksRoute;
