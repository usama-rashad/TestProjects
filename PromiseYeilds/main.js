function* sayHiGenerator() {
  yield "hey";
  yield "hi";
  let final = yield "hola";
  console.log(final);
  return "complete";
}

const sayHiGen = sayHiGenerator();

console.log(sayHiGen.next());
console.log(sayHiGen.next("usama"));
console.log(sayHiGen.next("rashad"));
console.log(sayHiGen.next());
