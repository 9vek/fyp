import './index.css'

import store from './store/store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import {
  createAuthClient,
  isAuthClientReady,
  checkAuthentication,
  isAuthenticated,
  createActor,
  isActorReady,
  updateAccountInfo
} from './store/auth'

import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"

import React, { useEffect } from "react"
import { createRoot } from "react-dom/client"

import LoginView from "./views/LoginView"
import Home from "./views/Home"
import Profile from './views/Profile'
import ProfileEdit from './views/ProfileEdit'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/edit",
    element: <ProfileEdit />
  }
]);

const App = () => {

  const dispatch = useDispatch()
  const authClientReady = useSelector(isAuthClientReady)
  const actorReady = useSelector(isActorReady)
  const authenticated = useSelector(isAuthenticated)

  useEffect(() => {
    console.log("create auth client")
    dispatch(createAuthClient())
  }, [])

  useEffect(() => {
    console.log("check authentication")
    dispatch(checkAuthentication())
  }, [authClientReady])

  useEffect(() => {
    console.log("create actor")
    if (authenticated) {
      dispatch(createActor())
    }
  }, [authenticated])

  useEffect(() => {
    console.log("get account info")
    if (actorReady) {
      dispatch(updateAccountInfo({
        nickname: "",
        signature: ""
      }))
    }
  }, [actorReady])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

const root = createRoot(document.getElementById("app"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)