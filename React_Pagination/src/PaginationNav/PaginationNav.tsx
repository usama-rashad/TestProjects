import "./PaginationNav.scss";

import React, { useEffect } from "react";

interface IPaginationNavProps {
  totalPages: number;
}

function PaginationNav({ totalPages }: IPaginationNavProps) {
  let pageNumbers: number[] = [];
  useEffect(() => {
    for (let index = 0; index < totalPages; index++) {
      pageNumbers.push(index + 1);
    }
  }, [totalPages]);

  return (
    <div className="mainPaginationNav">
      <button>P</button>
      {pageNumbers.map((pageNumber) => {
        return <p>{pageNumber}</p>;
      })}
      <button>N</button>
    </div>
  );
}

export default PaginationNav;
