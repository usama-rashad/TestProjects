import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchScrollReducer } from "./../reducers/fetchScrollData";
import { RootType } from "../store";

function useFetchScroll() {
  const { busy, segmentData, segmentStart, segmentEnd, segmentLength, isEnd } = useSelector((state: RootType) => state.fetchScroll);
  return { busy, segmentData, segmentStart, segmentEnd, segmentLength, isEnd };
}

export { useFetchScroll };
