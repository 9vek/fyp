import './index.css'

import store from './store/store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import {
  createAuthClient,
  isAuthClientReady,
  checkIfAuthenticated,
  isAuthenticated,
  createActor,
  isActorReady,
  isAccountExists,
  getAccountInfo,
  checkIfAccountExists,
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
import MarkdownEditor from './views/MarkdownEditor'

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
  },
  {
    path: "/editor",
    element: <MarkdownEditor />
  }
]);

const App = () => {

  const dispatch = useDispatch()
  const authClientReady = useSelector(isAuthClientReady)
  const actorReady = useSelector(isActorReady)
  const authenticated = useSelector(isAuthenticated)
  const accountExists = useSelector(isAccountExists)


  useEffect(() => {
    console.log("create auth client")
    dispatch(createAuthClient())
  }, [])

  useEffect(() => {
    if (authClientReady) {
      console.log("check authentication")
      dispatch(checkIfAuthenticated())
    }
  }, [authClientReady])

  useEffect(() => {
    if (authenticated) {
      console.log("create actor")
      dispatch(createActor())
    }
  }, [authenticated])

  useEffect(() => {
    if (actorReady) {
      console.log("check if account exists")
      dispatch(checkIfAccountExists())
    }
  }, [actorReady])

  useEffect(() => {
    if (accountExists) {
      console.log("get account info")
      dispatch(getAccountInfo())
    }
  }, [accountExists])

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