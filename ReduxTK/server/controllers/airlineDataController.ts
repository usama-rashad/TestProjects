import { Request, Response } from "express";
import { Airlines } from "./../database/dbTables";

export interface IAirlineData {
  airlineName: string;
  fleet: {
    aircraftType: string;
    qty: number;
  }[];
}

const home = (req: Request, res: Response) => {
  return res.status(200).send("Welcome to the Airline Data endpoint");
};

const getAirlineData = (req: Request, res: Response) => {};

const setAirlineData = (req: Request, res: Response) => {
  let data: IAirlineData = req.body;
};

export { home, getAirlineData, setAirlineData };
