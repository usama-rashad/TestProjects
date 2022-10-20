export const SamplePromise = (target: boolean) => {
  return new Promise((resolve, reject) => {
    if (target) {
      setTimeout(() => {
        resolve(2);
      }, 2000);
    } else {
      setTimeout(() => {
        reject(-1);
      }, 3000);
    }
  });
};
