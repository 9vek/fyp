import React from "react"
import Icon from '@mdi/react'

const HeaderButton = (props) => {

  return (
    <div onClick={props.onClick} className="cursor-pointer h-full grid grid-cols-1 place-items-center px-2 hover:bg-stone-800">
      <a href={props.url}>
        <Icon path={props.icon}
          size={1.2}
          className="inline-block mx-1 mb-0.5 text-stone-50" />
        <span className="hidden md:inline text-stone-50">{props.name}</span>
      </a>
    </div>
  )
}

export default HeaderButton