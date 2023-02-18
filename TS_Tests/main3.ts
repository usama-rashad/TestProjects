const permutations = (n: number[]): number[][] => {
	if (n.length == 0) return [];
	else if (n.length == 1) return [n];
	else if (n.length == 2) {
		let result: number[][] = [];
		result.push([n[0], n[1]]);
		result.push([n[1], n[0]]);
		return result;
	} else {
		let result: number[][] = [];
		let selection: number = n[0];
		result.push(n.splice(1, n.length - 1));
		return permutations(result[result.length - 1]);
	}
};

const rotateRight = (n: number[]): number[] => {
	let lead: number = n[0];
	n.shift();
	n = n.flat().concat(lead);
	return n;
};

const swapLastTwo = (n: number[]): number[] => {
	if (n.length < 2) return [];
	else {
		let upper: number = n[n.length - 1];
		let lower: number = n[n.length - 2];
		n[n.length - 2] = upper;
		n[n.length - 1] = lower;
		return n;
	}
};

// Create and output like so :  1,2,3  ; 2,3 ; 3
const fib = (n: number): number => {
	if (n <= 1) {
		return n;
	} else {
		return fib(n - 2) + fib(n - 1);
	}
};
// Factorial
const factorial = (n: number): number => {
	if (n <= 1) {
		return 1;
	} else {
		return factorial(n - 1) * n;
	}
};

// 1,2,3
// 1,3,2
// 2,1,3
// 2,3,1
// 3,1,2
// 3,2,1

const perms = (n: number[]): number[][] => {
	let arr : number[] =[];
	for(let i=0;i<n.length;i++)
	{
		arr.push(n[i]);
		arr.push(perms(n.slice(i,n.length)))
	}


	return [];
};

// Slice test
let sampleSet: number[] = [1, 2];
let result = perms(sampleSet);
console.log(result);
