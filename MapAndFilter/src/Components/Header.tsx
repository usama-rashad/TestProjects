import { useContext } from "react";
import { HeaderContext } from "../Context";

export interface DataParameters {
  pars: string[];
}

const Header = () => {
  const parameters: DataParameters = useContext(HeaderContext);

  return (
    <div className="Header__Main">
      {parameters.pars?.map((i, index) => (
        <div key={index}>{i}</div>
      ))}
    </div>
  );
};

export default Header;
