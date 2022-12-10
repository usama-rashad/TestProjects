export interface Person {
	name: string;
	city: string;
	country: string;
}

export const test1 = ({name, ...address}: Person) => {
	console.log("Address is : " + JSON.stringify(address));
};
