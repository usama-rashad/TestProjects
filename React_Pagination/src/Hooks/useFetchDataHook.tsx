import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useFetchDataHook() {
  const { busy, completeData, numberOfPages, selectedData, pages } = useSelector((state: RootState) => state.getData);
  return { busy, completeData, numberOfPages, selectedData, pages };
}
