import "./Paginate.scss";

import React, { useEffect, useState } from "react";
import { useFetchDataHook } from "../../Hooks/useFetchDataHook";
import DataRow from "../DataRow/DataRow";
import PageNav from "../PageNav/PageNav";
import PaginationNav from "../../PaginationNav/PaginationNav";

interface IPaginateParams {
  totalPages: number;
}

interface IPaginate {
  dataList: any[];
  itemsPerPage: number;
  RowTemplate: React.ReactNode;
}

function Paginate({ dataList, itemsPerPage = 1, RowTemplate }: IPaginate) {
  const [paginateParams, setPaginateParams] = useState<IPaginateParams>();
  const [pages, setPages] = useState<any[]>([]);

  useEffect(() => {
    if (itemsPerPage > 0) {
      let maxPages = Math.ceil(dataList.length / itemsPerPage);
      let pageArray = Array<any[]>(maxPages);

      for (let index = 0; index < maxPages; index++) {
        let start = index * itemsPerPage;
        let end = index * itemsPerPage + itemsPerPage;
        let page = dataList.slice(start, end);
        pageArray[index] = page;
      }
      setPages(pageArray);
    }
  }, [dataList]);

  return (
    <div className="mainPaginate">
      <div className="data">
        {pages.map((row, index) => {
          return (
            <div className="dataRow">
              {row.map((element: any, index: number) => {
                return <RowTemplate key={index} />;
              })}
            </div>
          );
        })}
      </div>
      <div className="nav">
        <PaginationNav totalPages={pages.length} />
      </div>
    </div>
  );
}

export default Paginate;
