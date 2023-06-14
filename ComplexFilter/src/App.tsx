import React from "react"
import "./App.scss"
import Filter, { IFilterParameter } from "./components/Filter/Filter"
import FilterWithHOC from "./components/Filter/withHOC"

let setup: IFilterParameter[] = [
  { parameterName: "Brand", type: "string" },
  { parameterName: "Model", type: "string" },
  { parameterName: "CPU Type", type: "multiple", options: ["Core-i7", "Core-i5", "Core-i3"] },
  { parameterName: "RAM", type: "option", options: ["32GB", "16GB", "8GB"] },
  { parameterName: "RAM", type: "menu", options: ["32GB", "16GB", "8GB"] },
]

function App() {
  return (
    <div className="mainApp">
      <FilterWithHOC base={<Filter settings={setup} />} />
    </div>
  )
}

export default App
