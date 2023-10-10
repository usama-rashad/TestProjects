import "./Paginate.scss";

import React, { ReactNode } from "react";

export type PaginateProps<T> = {
  dataSource: T[];
  rowRenderItem: (key: number, item: T) => ReactNode;
};

function Paginate<T>({ dataSource, rowRenderItem }: PaginateProps<T>) {
  return (
    <div className="paginate">
      {dataSource.map((item, index) => {
        return rowRenderItem(index, item);
      })}
    </div>
  );
}

export default Paginate;
