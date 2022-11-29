import {mySqlDataSource} from "./dataSource";
import {flightdata} from "./entities/Flightdata";
import {Userauth} from "./entities/Userauth";

const mySQLConnection = mySqlDataSource
	.initialize()
	.then(() => {
		console.log("Database connection open.");
		console.log("Getting data...");
		mySqlDataSource
			.getRepository(Userauth)
			.find()
			.then((data) => {
				console.log("Table data : ");
				data.forEach((row) => {
					console.log(row);
				});
			})
			.catch((err) => {
				console.log("Error while getting data : " + err);
			});
		// Make some data and enter it into the "flightdata" table.
		const newflight = new flightdata();
		newflight.departure = "Lahore";
		newflight.destination = "Islamabad";
		newflight.flightTimeInMins = 30;
		mySqlDataSource
			.getRepository(flightdata)
			.insert(newflight)
			.then(() => {
				console.log(
					"New flight data has been inserted into table successfully."
				);
			})
			.catch((err) => {
				console.log("Data insert failed. Error : " + err);
			});
	})
	.catch((err) => {
		console.log("Error while initilizing connection. Error : " + err);
	});
