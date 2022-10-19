function read(state) {
  let a = new Promise((resolve, reject) => {
    let condition = state;
    if (condition) {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    } else {
      setTimeout(() => {
        reject(-1);
      }, 5000);
    }
  });

  return a;
}

exports.read = read;
