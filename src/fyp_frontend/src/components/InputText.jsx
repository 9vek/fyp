import React, { Component } from "react"

class InputText extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="mb-4 mt-2">
        <label className="block text-stone-900 text-sm font-bold mb-2">{ this.props.name }</label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-stone-900 bg-transparent leading-tight focus:outline-none focus:border-stone-400" />
        <p className="text-red-900 text-sm"></p>
      </div>
    )
  }
}

export default InputText