import React, { Component } from "react"
import HeaderButton from "./HeaderButton"

class Header extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <header className="fixed z-50 h-16 w-full bg-stone-900">
        <div className="float-left grid h-full w-fit grid-cols-1 place-items-center px-4">
          <a href="/" className="flex space-x-3 text-xl font-bold text-white">
              <div className="grid-cols-1 place-items-center hidden md:grid">
                Kevyn's FYP
              </div>
          </a>
        </div>
        <div className="float-right flex space-x-2 h-full w-fit px-4 text-lg font-bold text-white">
          <HeaderButton name="Login" />
          <HeaderButton name="Profile" />
        </div>
      </header>
    )
  }
}

export default Header