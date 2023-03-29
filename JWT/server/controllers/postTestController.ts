import { Request, Response, NextFunction } from "express";

export const postTestController = (req: Request, res: Response, next: NextFunction) => {
  let username = req.body.username;
  console.log("Entered username : " + JSON.stringify(req.body));
  return res.status(200).send("Success");
};
