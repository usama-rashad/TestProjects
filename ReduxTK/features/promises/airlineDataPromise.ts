import {IData} from "./../slices/data/airlineFetchSlice";

const testAirlineData: IData = {airlines: ["KingAir", "ZombieAir"]};
const emtpyAirlineData: IData = {airlines: []};

export const airlineDataPromise = (condition: boolean) =>
	new Promise<IData>((resolve, reject) => {
		if (condition) {
			setTimeout(() => {
				resolve(testAirlineData);
			}, 2000);
		} else {
			setTimeout(() => {
				reject(emtpyAirlineData);
			}, 4000);
		}
	});
