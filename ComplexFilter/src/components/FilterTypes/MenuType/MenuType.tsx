import React from "react"
import "./MenuType.scss"
import { useFilterDispatch } from "../../Filter/FilterStore"
import { updateMenuOption } from "../../Filter/FilterReducer"

interface IMenuOption {
  name: string
  value: string
  options: string[]
}

function MenuOption(props: IMenuOption) {
  const [option, setOption] = React.useState(props.options[0])
  // Dispatch
  const filterDispatch = useFilterDispatch()

  //Update initially
  React.useEffect(() => {
    filterDispatch(updateMenuOption({ parameterName: props.name, type: "menu", options: [option] }))
  }, [])

  const updateData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.currentTarget.value
    setOption(value)
    filterDispatch(updateMenuOption({ parameterName: props.name, type: "menu", options: [option] }))
  }

  return (
    <div className="mainMenuOption">
      <p className="optionTitle">{props.name}</p>
      <select className="option" name={props.name} id={props.name} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateData(e)}>
        {props.options.map((option, index) => {
          return <option key={index}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default MenuOption
