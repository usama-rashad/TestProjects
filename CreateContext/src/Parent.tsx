import React, { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

function Parent({ children }: IProps) {
  const [data, setData] = useState<React.ReactNode>();

  useEffect(() => {
    setData(children);
    console.log(children);
  }, []);

  return <div>{children}</div>;
}

export default Parent;
