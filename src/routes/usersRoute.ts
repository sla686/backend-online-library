import { Request, Response, Router } from "express";

const usersRoute = Router();
usersRoute.get("/", (req: Request, res: Response) => {
  res.send("Get route from userRoute");
});
usersRoute.post("/", (req: Request, res: Response) => {
  res.send("Post route from userRoute");
});
export default usersRoute;
