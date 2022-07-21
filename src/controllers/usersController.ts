import { Request, Response } from "express";
import User from "../models/Users";

const getAllUsers = async (req: Request, res: Response) => {
  const user = await User.find();
  res.json(user);
};
const createUser = async (req: Request, res: Response) => {
  const { firstname, lastname, email, role } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const newUser = await User.create({
    firstname,
    lastname,
    email,
    role
    
  }).then((data) => {
    res.json(data);
  });
};

const getSingleUser = (req: Request, res: Response) => {
  return res.send(`response:${req.params.userId}`);
};

const postSingleUser = (req: Request, res: Response) => {
  return res.send("add a user");
};

const patchSingleUser = (req: Request, res: Response) => {
  return res.send(`updates:${req.params.userId}`);
};

const deleteSingleUser = (req: Request, res: Response) => {
  return res.send(`delete:${req.params.userId}`);
};

export default {
  getAllUsers,
  createUser,
  getSingleUser,
  patchSingleUser,
  postSingleUser,
  deleteSingleUser,
};
