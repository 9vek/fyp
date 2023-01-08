import React from "react"
import { useSelector } from 'react-redux'
import { isAuthenticated } from "../store/auth"

import Icon from '@mdi/react'
import { mdiLibrary } from "@mdi/js"

const Home = (props) => {

  const authenticated = useSelector(isAuthenticated)

  return (
    <div className="h-screen grid grid-cols-1 place-items-center">
      <div>
        <Icon className="text-stone-700 inline-block" path={mdiLibrary} />
        {authenticated ? "Authenticated" : "Unauthenticated"}
      </div>
      <div className="text-2xl font-bold">Fully On-chain Cloud Storage</div>
    </div>
  )

}

export default Home