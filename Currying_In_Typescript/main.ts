console.log("Program start...");

function baseFunction(...args: any[]) {
  return args;
}

const counter = { value: 0 };

counter

Object.defineProperty(counter, "increment", {
  get: function () {
    this.value++;
  },
});

console.log(counter);
