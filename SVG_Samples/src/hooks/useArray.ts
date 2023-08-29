import { useEffect, useState } from "react";

interface IUseArray {
  serialnumber: number;
  aisle: string;
}

const useArray = (initialValue: IUseArray[]) => {
  const [array, setArray] = useState(initialValue);
  const [length, setLength] = useState<number>(0);

  const push = (input: IUseArray) => {
    setArray([...array, input]);
  };
  const remove = () => {
    setArray([...array.splice(0, array.length - 1)]);
  };

  useEffect(() => {
    console.log(array);
    setLength(array.length);
  }, [array]);

  return { array, push, remove, length };
};

export default useArray;
