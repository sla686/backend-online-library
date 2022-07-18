import { Router, Request, Response, NextFunction } from "express";

import booksController from "../controllers/booksController";

const booksRoute = Router();
booksRoute.get("/", booksController.getAllBooks);
booksRoute.post("/", booksController.postBooks);
booksRoute.get("/:bookId", booksController.getSingleBook);
// booksRoute.patch('/:bookId', booksController.patchSinglebook)
booksRoute.delete("/books/:bookId", booksController.deleteSinglebook);

export default booksRoute;
