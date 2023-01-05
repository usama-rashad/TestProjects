function SamplePromise(input: number) {
	let p = new Promise<number>((res, rej) => {
		setTimeout(() => {
			res(input * 2);
		}, 2000);
	});
}

console.log("Program started.");
SamplePromise(1);
