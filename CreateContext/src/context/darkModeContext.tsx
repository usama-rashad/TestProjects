import { createContext, useState } from "react";

export const DarkModeContext = createContext<boolean>(false);

export const DarkModeRender = () => {
  const [val, setVal] = useState<boolean>();

  const toggleMode = () => {
    setVal(!val);
  };
  return (
    <div>
      <DarkModeContext.Provider value={val as boolean}>
        <button onClick={toggleMode}>Click</button>
      </DarkModeContext.Provider>
    </div>
  );
};
