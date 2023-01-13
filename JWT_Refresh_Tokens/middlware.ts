import {NextFunction, Request, Response} from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {
	// Add a key to the req object for further processing by the next middleware
	next();
};

export {middleware};
