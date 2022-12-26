import {Request, Response} from "express";

const airlineDataController = (req: Request, res: Response) => {
	return res.status(200).send("Welcome to the Airline Data endpoint");
};

export {airlineDataController};
