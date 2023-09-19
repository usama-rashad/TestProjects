import React from "react";
import { useSelector } from "react-redux";
import { rootStore, RootState } from "./../store";

function useFileStatus() {
  let { status, fileStatus } = useSelector((state: RootState) => state.fileUpload.fileStatusCheckReducer);
  return { status, fileStatus };
}

export default useFileStatus;
