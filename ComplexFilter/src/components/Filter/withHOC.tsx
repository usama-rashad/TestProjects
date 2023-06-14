import Filter from "./Filter";
import { Provider } from "react-redux";
import { filterStore, useFilterDispatch } from "./FilterStore";

interface IFilterWithHOC {
  base: React.JSX.Element;
}

export default function FilterWithHOC(props: IFilterWithHOC) {
  return <Provider store={filterStore}>{props.base};</Provider>;
}
