import { canisterId as backendCanisterId, createActor as backendCreateActor } from "../../declarations/fyp_backend";
const localIICanisterId = "rkp4c-7iaaa-aaaaa-aaaca-cai"

import { AuthClient } from "@dfinity/auth-client"

import React, { Component } from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginForm from "./views/LoginForm"
import Home from "./views/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

class App extends Component {

  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
    }
    this.authClient = null
    this.login = this.login.bind(this)
  }

  async componentDidMount() {
    this.authClient = await AuthClient.create()
    const isAuthenticated = await this.authClient.isAuthenticated()
    if (isAuthenticated) {
      this.actor = createBackendActor(backendCanisterId, {
        agentOptions: {
          identity: this.authClient.getIdentity(),
        },
      })
      this.setState({
        isAuthenticated
      })
    }
  }


  async login() {
    await this.authClient.login({
      // identityProvider: `http://127.0.0.1:8000/?canisterId=${localIICanisterId}`,
      onSuccess: async () => {
        this.actor = backendCreateActor(backendCanisterId, {
          agentOptions: {
            identity: this.authClient.getIdentity(),
          },
        })
        this.setState({
          isAuthenticated: true
        })
      },
    });

  }

  render() {

    return (
      <div className="">
        <Header />
        <div onClick={ this.login } className="min-h-screen">
          <div className="w-full h-16"></div>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </div>
        <hr />
        <Footer />
      </div>

    )

  }

}

const root = createRoot(document.getElementById("app"))
root.render(<App />)