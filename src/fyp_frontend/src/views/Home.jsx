import React, { Component } from "react"
import { useSelector } from 'react-redux'
import { isAuthenticated } from "../store/auth"

const Home = (props) => {

  const authenticated = useSelector(isAuthenticated)

  return (
    <div className="h-screen grid grid-cols-1 place-items-center">
      <div>{ authenticated ? "Authenticated" : "Unauthenticated" }</div>
      <div className="text-2xl font-bold">Fully On-chain Cloud Storage</div>
    </div>
  )

}

export default Home