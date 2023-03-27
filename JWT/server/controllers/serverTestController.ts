import { Request, Response, NextFunction } from "express";

export const serverTestController = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ serverTime: Date.now() });
};
