function getProperty<T, K extends keyof T>(input: T, key: K) {
  return input[key];
}

let value = getProperty({ name: "usama", age: 12 }, "name");
