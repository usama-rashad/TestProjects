function log(target: any, key: any, descriptor: any) {
  console.log(`${key} was called`);
}

class Calculator {
  // Using the decorator log

  @log
  square(n: number) {
    return n * n;
  }
}

let test = new Calculator();

console.log(test.square(4));
