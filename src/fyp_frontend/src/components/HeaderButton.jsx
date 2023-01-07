import React, { Component } from "react"

const HeaderButton = (props) => {

  return (
    <div className="h-full grid grid-cols-1 place-items-center px-2 hover:bg-stone-800">
      <a href={ props.url }>
        <span className="bx bx-briefcase-alt"></span>
        <span className="hidden md:inline">{ props.name }</span>
      </a>
    </div>
  )
}

export default HeaderButton