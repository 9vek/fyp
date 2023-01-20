import React from "react"
import Icon from "@mdi/react"
import { mdiCursorDefault } from "@mdi/js/mdi"

const buttonTypes = {
  normal: "text-stone-50 bg-stone-700 hover:bg-stone-600",
  danger: "text-stone-50 bg-red-700 hover:bg-red-600",
  success: "text-stone-50 bg-lime-700 hover:bg-lime-600"
}

const MainButton = (props) => {

  let className = "select-none py-2 px-4 text-lg font-bold text-center rounded-md text-stone-50 cursor-pointer "
  className += props.buttonType && buttonTypes[props.buttonType] ? buttonTypes[props.buttonType] : buttonTypes.normal

  if (props.icon == undefined) {
    props.icon = mdiCursorDefault
  }

  return (
    <div
      onClick={props.onClick}
      className={className}>
      <Icon path={props.icon} size={1.2}
        className="inline-block mr-1.5 mb-1 text-stone-50" />
      <span>{props.name}</span>
    </div>
  )

}

export default MainButton