import * as _ from "lodash";

let numberArray: number[] = [1, 26, 26.00000001, 4, 5, 6];
let newArray: number[];
let max: number;

console.log("Lodash version : " + _.VERSION);
max = _.max(numberArray) as number;

console.log("Max is " + max);

console.log(numberArray);

export {numberArray};
