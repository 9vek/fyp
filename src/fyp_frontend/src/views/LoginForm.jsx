import React, { Component } from "react"
import InputText from "../components/InputText"

class LoginForm extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="">
        <InputText name="Username" />
      </div>
    )
  }
}

export default LoginForm