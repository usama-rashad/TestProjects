import { Request, Response, NextFunction } from "express";
import { incCounter } from "../main";

function generalInterceptor(req: Request, res: Response, next: NextFunction) {
  incCounter();
  next();
}

export default generalInterceptor;
