import {DataSource} from "typeorm";

// Entities
import {Userauth} from "./entities/Userauth";
import {flightdata} from "./entities/Flightdata";

export const mySqlDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3307,
	username: "ormuser",
	password: "1234",
	database: "data",
	entities: [Userauth, flightdata],
	synchronize: true,
});
