import React, { Component } from "react"

class HeaderButton extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="h-full grid grid-cols-1 place-items-center px-2 hover:bg-stone-800">
        <a href="/projects">
          <span className="bx bx-briefcase-alt"></span>
          <span className="hidden md:inline">{ this.props.name }</span>
        </a>
      </div>
    )
  }
}

export default HeaderButton