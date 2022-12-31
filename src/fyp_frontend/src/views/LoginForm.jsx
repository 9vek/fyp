import React, { Component } from "react"
import MainButton from "../components/MainButton"

class LoginForm extends Component {

  constructor() {
    super()
  }

  async componentDidMount() {
    this.authClient = await AuthClient.create()
    const isAuthenticated = await this.authClient.isAuthenticated()
    if (isAuthenticated) {
      this.actor = createActor(canisterId, {
        agentOptions: {
          identity: this.authClient.getIdentity(),
        },
      })
      this.setState({
        isAuthenticated,
        identity: this.authClient.getIdentity()
      })
    }
    // ...
  }

  testLogin() {
    console.log(1);
  }

  render() {
    return (
      <div className="h-screen grid grid-cols-1 place-items-center">
        <MainButton exec={this.testLogin} name="Login With Internet Identity" />
      </div>
    )
  }
}

export default LoginForm