import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

// Make a middleware to
const verifyMiddleware = (req: Request, res: Response, next: NextFunction) => {
	// Check the bearer access token
	const authorizationHeader = req.headers.authorization;
	if (authorizationHeader) {
		const token = authorizationHeader.split(" ").at(1) as string;
		jwt.verify(
			token,
			process.env.ACCESS_TOKEN_SECRET as string,
			(err, payload) => {
				if (err) {
					return res.status(403).json("Token is not valid.");
				}

				req.user = payload as API.IUser;
				next();
			}
		);
	} else {
		return res.status(401).json("You are not authenticated.");
	}
};

export {verifyMiddleware};
