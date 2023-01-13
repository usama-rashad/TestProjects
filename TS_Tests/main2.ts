// Create two promises and run them one after the other with the await pre-fix to see if they run consecutively or not
const part1 = async () => {
	let p1 = await new Promise<void>((res, rej) => {
		setTimeout(() => {
			res();
		}, 4000);
	}).then(() => {
		console.log("P1 success.");
	});
};

const part2 = async () => {
	let p2 = await new Promise<void>((res, rej) => {
		setTimeout(() => {
			res();
		}, 3000);
	}).then(() => {
		console.log("P2 success.");
	});
};

console.log("Program running...");
part1();
part2();
