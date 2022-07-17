import { Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {
  return res.send("FIND Here all users list!!!");
};


const getSingleUser = (req: Request, res: Response) => {
  return res.send(`response:${req.params.userId}`);
  
};

const postSingleUser = (req: Request, res: Response) => {
return res.send("add a user")
};

const patchSingleUser = (req: Request, res: Response) => {
  return res.send(`updates:${req.params.userId}`);
};

const deleteSingleUser = (req: Request, res: Response) => {
  return res.send(`delete:${req.params.userId}`);
};

export default {
    getAllUsers,
    getSingleUser,
    patchSingleUser,
    postSingleUser,
    deleteSingleUser };