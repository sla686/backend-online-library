import { Request, Response } from "express";

const getAllBooks = (req: Request, res: Response) => {
  return res.send("response: books list");
};

// const getSingleBooks = (req: Request, res: Response) => {
//     const { booksId } = req.params
//     if (bookId === "1") {
//         throw new CustomError(401, 'Not user found')
//     }
//     return res.send(`response:${bookId}`)
// }

export default { getAllBooks };
