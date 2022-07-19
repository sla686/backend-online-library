import express, { Router, Request, Response, NextFunction } from "express";
import { userRequest, seconduserRequest } from "../middlewares/userMiddleware";
import usersController from "../controllers/usersController";

const usersRoute = Router();
usersRoute.get(
  "/",
  userRequest,
  seconduserRequest,
  usersController.getAllUsers
);
usersRoute.post("/", usersController.postSingleUser);
usersRoute.get("/:userId", usersController.getSingleUser);
usersRoute.patch("/:userId", usersController.patchSingleUser);
usersRoute.post("/:userId", usersController.postSingleUser);

export default usersRoute;
