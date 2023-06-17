import { NextFunction, Request, Response } from "express";

function requireUser(req: Request, res: Response, next: NextFunction) {
  // @ts-ignore
  if (!req.user) {
    return res.status(403).send("Invalid session.");
  }
  return next();
}

export { requireUser };
