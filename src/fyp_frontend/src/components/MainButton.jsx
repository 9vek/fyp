import React, { Component } from "react"

class MainButton extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div 
        onClick={ this.props.onClick }
        className="select-none m-4 py-2 px-4 text-xl text-center rounded-md font-bold text-white bg-stone-900 hover:bg-stone-700 cursor-pointer ">
        { this.props.name }
      </div>
    )
  }
}

export default MainButton