import { Router, Request, Response, NextFunction } from "express";

import booksController from "../controllers/booksController";

const booksRoute = Router();
booksRoute.get("", booksController.getAllBooks);
// booksRoute.get('/:bookId', booksController.getSingleBook)

export default booksRoute;
