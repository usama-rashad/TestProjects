import "./PageNav.scss";

import React from "react";
import { useDispatch } from "react-redux";
import { useFetchDataHook } from "../../Hooks/useFetchDataHook";
import { fetchDataAsyncThunk, changePageNumber } from "../../Reducers/fetchData";
import { useAppDispatch } from "../../store";

import reactIcon from "../../assets/React-icon.svg.png";

function PageNav() {
  const { busy, completeData, numberOfPages, selectedData, pages } = useFetchDataHook();

  const dispatch = useAppDispatch();
  const getData = () => {
    dispatch(fetchDataAsyncThunk());
  };

  const pageSelect = (e: React.MouseEvent<HTMLParagraphElement>) => {
    let pTag = e.target as HTMLElement;
    let pageNumber = parseInt(pTag.outerText);
    dispatch(changePageNumber(pageNumber - 1));
  };
  return (
    <div className="mainPageNav">
      <button onClick={getData}>Get Data</button>
      {busy && <img src={reactIcon} />}
      <div className="pages">
        {pages.map((selections, index) => {
          return (
            <p onClick={(e) => pageSelect(e)} key={index}>
              {index + 1}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default PageNav;
