import "./Paginate.scss";
import React from "react";

type PaginateProps<T extends {}> = {
  dataSource: T[];
  renderItem: (item: T) => React.JSX.Element;
};

function Paginate<T extends {}>(props: PaginateProps<T>) {
  return (
    <div className="mainPaginate">
      {props.dataSource.map((value, index) => {
        return (
          <div key={index} className="dataRow">
            {props.renderItem(value)}
          </div>
        );
      })}
    </div>
  );
}

export default Paginate;
