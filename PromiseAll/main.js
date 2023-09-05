console.log("Program start...");

const data = [1, 2, 3, 4, 5];

async function SinglePromise(index) {
  return new Promise((res, rej) => {
    console.log("Called " + index);

    setTimeout(() => {
      res(1);
      console.log("Completed " + index);
    }, (index + 1) * 1000);
  });
}

async function manyPromisesForEach() {
  data.forEach(async (element, index) => {
    let promiseResult = await SinglePromise(index);
    console.log(index);
  });
}

async function manyPromisesForLoop() {
  for (let i = 0; i < data.length; i++) {
    let promiseResult = await SinglePromise(i);
    console.log(i);
  }
}

async function promiseAllCall() {
  let listOfPromises = [];
  data.forEach(async (element, index) => {
    listOfPromises[index] = SinglePromise(index);
  });
  return Promise.all(listOfPromises);
}

async function call() {
  promiseAllCall().then((values) => {
    console.log("All promises completed");
  });
}

call();
