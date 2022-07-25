import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { CustomError } from "ErrorType";
import User from "../models/Users";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    return next(e);
  }
};
const postUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { firstname, lastname, email, password, role } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      hashedPassword,
      role,
    }).then((data) => {
      res.json(data);
    });
  } catch (e) {
    return next(e);
  }
};
/********************SINGLE USER *********************** */

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.findById(req.params.userId).then((data) => {
      res.json(data);
    });
  } catch (e) {
    return next(e);
  }
};

const loginToken = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    const token = jwt.sign(req.body.user, "mysecretkey", {
      algorithm: "RS256",
    });
    console.log(token);
    return res.status(200).send(token);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};

const patchSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.userId;
    const postUserData = req.body;

    const user = await User.findByIdAndUpdate(id, postUserData, { new: true });
    res.status(200).send(User);
  } catch (e) {
    return next(e);
  }
};

const deleteSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.findOneAndRemove({ _id: req.params.userId }).then;
    console.log(await User.countDocuments({ _id: req.params.userId })); // 0
    return res.status(200).send("the user was deleted.");
  } catch (e) {
    return next(e);
  }
};

export default {
  getAllUsers,
  postUsers,
  getSingleUser,
  patchSingleUser,
  deleteSingleUser,
};
// import { Request, Response } from "express";
// import User from "../models/Users";

// const getAllUsers = async (req: Request, res: Response) => {
//   const user = await User.find();
//   res.json(user);
// };
// const createUser = async (req: Request, res: Response) => {
//   const { firstname, lastname, email, role } = req.body;
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//   const newUser = await User.create({
//     firstname,
//     lastname,
//     email,
//     role

//   }).then((data) => {
//     res.json(data);
//   });
// };

// const getSingleUser = (req: Request, res: Response) => {
//   return res.send(`response:${req.params.userId}`);
// };

// const postSingleUser = (req: Request, res: Response) => {
//   return res.send("add a user");
// };

// const patchSingleUser = (req: Request, res: Response) => {
//   return res.send(`updates:${req.params.userId}`);
// };

// const deleteSingleUser = (req: Request, res: Response) => {
//   return res.send(`delete:${req.params.userId}`);
// };

// export default {
//   getAllUsers,
//   createUser,
//   getSingleUser,
//   patchSingleUser,
//   postSingleUser,
//   deleteSingleUser,
// };
