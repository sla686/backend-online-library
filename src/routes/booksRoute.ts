import { Router, Request, Response, NextFunction } from "express";

import booksController from "../controllers/booksController";

const booksRoute = Router();
booksRoute.get("/", booksController.getAllBooks);
booksRoute.get("/:bookId", booksController.getSingleBook);
booksRoute.post("/", booksController.postSinglebook);
// booksRoute.patch('/:bookId', booksController.patchSinglebook)
// booksRoute.delete("/books/:bookId", booksController.deleteSingleBook);

export default booksRoute;
