export const samplePromise = (target: boolean) => {
  return new Promise((resolve, reject) => {
    if (target) {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    } else {
      setTimeout(() => {
        reject(-1);
      }, 3000);
    }
  });
};
