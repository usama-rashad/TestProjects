export interface data {
	id: number;
	isValid: boolean;
	message: string;
}

export const printDataLine = (i: data) => {
	console.log("id:" + i.id + ",isValid:" + i.isValid + ",message:" + i.message);
};

export const createSampleData = (count: number, input: data[]) => {
	for (let index = 0; index < count; index++) {
		const randomnData = {
			id: index + 1,
			isValid: Math.random() > 0.5,
			message: "ID : " + Math.random(),
		};
		input.push(randomnData);
	}
};
