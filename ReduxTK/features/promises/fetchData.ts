// Sample promise to test redux thunk functions

export const fetchData = (force: boolean) =>
	new Promise<void>((resolve, reject) => {
		if (force) {
			setTimeout(() => {
				console.log("Data received.");
				resolve();
			}, 2000);
		} else {
			setTimeout(() => {
				console.log("Data error.");
				reject();
			}, 5000);
		}
	});
