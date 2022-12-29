import {Request, Response} from "express";
import {Airlines} from "./../database/dbTables";
import {dbDataSource} from "./../database/dbConnection";
import _, {isEmpty} from "lodash";

export interface IAirlineData {
	airlineName: string;
	airlineHub: string;
	iconURL: string;
	fleet?: {
		aircraftType: string;
		qty: number;
	}[];
}

const home = (req: Request, res: Response) => {
	return res.status(200).send("Welcome to the Airline Data endpoint");
};

const getAirlineData = async (req: Request, res: Response) => {
	let data: IAirlineData[];
	let dbResult = await dbDataSource
		.getRepository("FlightPlanner")
		.query(`SELECT id, name	FROM public.airlines;`);
	return res.status(200).send(dbResult);
};

const setAirlineData = async (req: Request, res: Response) => {
	let data: IAirlineData = req.body;
	console.log(data);

	// First find a previous entry by airline name. If the entry exists then return an error otherwise continue with saving
	let results = await dbDataSource
		.getRepository("Airlines")
		.findOneBy({name: data.airlineName});

	// If no previous entry was found then add new one to DB
	if (isEmpty(results)) {
		let newAirline = new Airlines();
		newAirline.airlineHub = data.airlineHub;
		newAirline.name = data.airlineName;
		newAirline.iconURL = data.iconURL;
		dbDataSource
			.getRepository("Airlines")
			.save(newAirline)
			.then(() => {
				return res.status(200).send("Data saved to database.");
			})
			.catch((err) => {
				console.log("Error");
				return res
					.status(405)
					.send("Error while saving to database. Err : " + err);
			});
	} else {
		// If an entry was found then return an error message
		return res
			.status(404)
			.send("Airline name already exists. Please choose a different name.");
	}
};

export {home, getAirlineData, setAirlineData};
