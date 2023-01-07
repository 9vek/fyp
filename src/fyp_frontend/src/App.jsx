import store from './store/store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthClient, isAuthClientReady, checkAuthentication, login } from './store/auth'

import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"

import React, { useEffect } from "react"
import { createRoot } from "react-dom/client"
import './index.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginView from "./views/LoginView"
import Home from "./views/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
]);

export default router

const App = () => {

  const dispatch = useDispatch()
  const authClientReady = useSelector(isAuthClientReady)

  useEffect(() => {
    (async () => {
      await dispatch(setAuthClient())
      if (authClientReady) {
        dispatch(checkAuthentication())
      }
    })()
  }, [])


  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
        <div className="w-full h-16"></div>
        <React.StrictMode>
          <RouterProvider router={ router } />
        </React.StrictMode>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

const root = createRoot(document.getElementById("app"))
root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)