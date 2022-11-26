import "reflect-metadata";
import {DataSource} from "typeorm";
import {User} from "./entity/User";

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3307,
	username: "root",
	password: "1234",
	database: "test",
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: [],
	subscribers: [],
});
