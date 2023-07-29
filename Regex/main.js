let regex = /\d/g;
let string = "letter1";

let matches = string.matchAll(regex);

for (let match of matches) {
  console.log(match);
}
