import React, { Component } from "react"

class LoginForm extends Component {

  constructor() {
    super()
  }

  testLogin() {
    console.log(1);
  }

  render() {
    return (
      <div className="h-screen grid grid-cols-1 place-items-center">
        <div className="text-2xl font-bold">Fully On-chain Cloud Storage</div>
      </div>
    )
  }
}

export default LoginForm