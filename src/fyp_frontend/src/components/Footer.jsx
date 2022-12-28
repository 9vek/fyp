import React, { Component } from "react"

class Footer extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <footer className="relative z-10 border border-t-2 border-stone-500 bg-stone-800 p-4 text-center lg:text-left">
        <div className="my-4 flex justify-center">
          
        </div>
        <div className="py-4">
          <div className="text-center text-stone-50">
            This project is mastered and led by
            <a className="font-extrabold text-white" href="https://github.com/KevynTang">KevynTang</a>
          </div>
          <div className="text-center text-stone-50">
            © 2022 Copyright:
            <a className="font-extrabold text-white" href="https://github.com/reednote-team">Kevyn Tang</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer