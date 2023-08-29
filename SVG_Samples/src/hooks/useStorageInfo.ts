import { useEffect, useState } from "react";

interface IUseArray {
  serialnumber: number;
  aisle: string;
}

const useStorageInfo = (initialValue: IUseArray[]) => {
  const [array, setArray] = useState(initialValue);
  const [length, setLength] = useState<number>(0);

  const push = (input: IUseArray) => {
    setArray([...array, input]);
  };
  const remove = () => {
    setArray([...array.splice(0, array.length - 1)]);
  };
  const updateRow = (data: any, index: number) => {
    let newRow = data;
    array.splice(index, 1, newRow);
    setArray([...array]);
  };

  useEffect(() => {
    setLength(array.length);
  }, [array]);

  return { array, push, remove, length, updateRow };
};

export default useStorageInfo;
