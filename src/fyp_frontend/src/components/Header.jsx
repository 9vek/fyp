import React from "react"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { isAuthenticated } from "../store/auth"
import HeaderButton from "./HeaderButton"

import { mdiAccount, mdiAccountDetails } from "@mdi/js"

const Header = (props) => {

  const navigate = useNavigate()

  const authenticated = useSelector(isAuthenticated)

  const toHome = () => { navigate("/") }
  const toLogin = () => { navigate("/login") }
  const toProfile = () => { navigate("/profile") }

  const headerMenu = () => {

    if (!authenticated) {
      return <HeaderButton name="Login" icon={mdiAccount} onClick={toLogin} />
    } else {
      return <HeaderButton name="Profile" icon={mdiAccountDetails} onClick={toProfile} />
    }

  }

  return (
    <header className="fixed z-10 h-16 w-full bg-stone-900">
      <div className="float-left grid h-full w-fit grid-cols-1 place-items-center px-4">
        <div onClick={toHome} className="flex space-x-3 text-xl font-bold text-white">
          <div className="grid-cols-1 place-items-center hidden md:grid">
            Kevyn's FYP
          </div>
        </div>
      </div>
      <div className="float-right flex space-x-2 h-full w-fit px-4 text-lg font-bold text-white">
        {headerMenu()}
      </div>
    </header>
  )
}

export default Header