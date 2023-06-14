const dummyPromise = (value: number) => {
  return new Promise<number>((res, rej) => {
    setTimeout(() => {
      res(value);
    }, 2000);
  });
};

export default dummyPromise;
