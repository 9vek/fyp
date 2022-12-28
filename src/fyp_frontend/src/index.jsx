

import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <a href={`/login`}>Hello World! </a>,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginForm from "./views/LoginForm";

const Container = () => {

  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
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

const root = createRoot(document.getElementById("app"))
root.render(<Container />)