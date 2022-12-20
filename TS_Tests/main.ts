const {program1} = require("./program1");

import {data, printDataLine, createSampleData} from "./helperFunctions";
import {test1} from "./program1";

// Clear the console
console.clear();

// Create randomn dataset
const input: data[] = [];
createSampleData(1000, input);

// Filter data and print results
const filteredData = input.filter(function (element) {
	return element.isValid;
});
console.log("Filtering data with " + filteredData.length + " elements...");

// Sort data and print results
const sortedData = input.sort((a: data, b: data) => a.id - b.id);
console.log("Sorting data with " + sortedData.length + " elements...");

// Call program 1
test1({name: "usama", city: "lahore", country: "pakistan"});

type TPromise = {
	response: number;
};

// Promise test
const remoteData = (value: number) =>
	new Promise<TPromise>((resolve, reject) => {
		if (value === 1) resolve({response: 123});
		else reject({response: 111});
	});

remoteData(0)
	.then((res) => {
		console.log("Succeeded with value " + JSON.stringify(res));
	})
	.catch((err) => {
		console.log("Failed with value " + JSON.stringify(err));
	});
