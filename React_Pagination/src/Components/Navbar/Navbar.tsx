import { NavbarContext } from "../../Contexts/NavbarProvider";
import "./Navbar.scss";
import React from "react";

interface INavbar {
  maxPageLimit: number;
}

function Navbar(props: INavbar) {
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const navbarContext = React.useContext(NavbarContext);

  React.useEffect(() => {
    navbarContext.setPageNumber(pageNumber);
  });

  const increasePageNmber = () => {
    if (pageNumber === props.maxPageLimit) {
      console.error("Max page limit reached");
    } else {
      setPageNumber((prev) => prev + 1);
    }
  };

  const decreasePageNumber = () => {
    if (pageNumber === 1) {
      console.error("Min page limit reached");
    } else {
      setPageNumber((prev) => prev - 1);
    }
  };

  return (
    <div className="mainNavbar">
      <div className="goPrevious" onClick={decreasePageNumber}>
        <div className="prevButton">{`<`}</div>
      </div>
      <div className="currentPageNumber">
        <input value={pageNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPageNumber(parseInt(e.target.value))} />
      </div>
      <div className="goNext" onClick={increasePageNmber}>
        <div className="prevButton">{`>`}</div>
      </div>
    </div>
  );
}

export default Navbar;
