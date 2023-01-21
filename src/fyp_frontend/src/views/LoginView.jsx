import React from "react"

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux"
import MainButton from "../components/MainButton"
import { isAuthClientReady, isAuthenticated, login } from "../store/auth"
import StandardLayout from "../layouts/StandardLayout";

import { mdiLogin } from "@mdi/js"

const LoginView = (props) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const authenticated = useSelector(isAuthenticated)

  const doLogin = async () => {
    await dispatch(login())
    navigate('/')
  }

  return (
    <StandardLayout>
      <div className="h-screen grid grid-cols-1 place-items-center">
        <div>{authenticated ? "Authenticated" : "Unauthenticated"}</div>
        <MainButton onClick={doLogin} name="Login With Internet Identity" icon={mdiLogin} />
      </div>
    </StandardLayout>
  )

}

export default LoginView