/* eslint-disable @typescript-eslint/no-misused-promises */
import  { Router, Request, Response, NextFunction } from "express";

import usersController from "../controllers/usersController";

const usersRoute = Router();
usersRoute.get("/",usersController.getAllUsers);
usersRoute.post("/", usersController.postUsers);
usersRoute.get("/:userId", usersController.getSingleUser);
usersRoute.patch("/:userId", usersController.patchSingleUser);
usersRoute.post("/:userId", usersController.deleteSingleUser);

export default usersRoute;
