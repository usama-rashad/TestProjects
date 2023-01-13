import {Request, Response, NextFunction} from "express";

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
	req.user = "Usama";
	next();
};

export {testMiddleware};
