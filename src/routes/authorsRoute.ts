import { Router, Request, Response, NextFunction } from "express";

import authorsController from "../controllers/authorsController";

const authorsRoute = Router();
authorsRoute.get("", authorsController.getAllAuthors);
// authorsRoute.get('/:authorId', authorsController.getSingleAuthor)

export default authorsRoute;
