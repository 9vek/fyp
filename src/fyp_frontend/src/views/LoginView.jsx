import React from "react"
import { useSelector, useDispatch } from "react-redux"
import MainButton from "../components/MainButton"
import { isAuthClientReady, isAuthenticated, login } from "../store/auth"

const LoginView = (props) => {

  const dispatch = useDispatch()
  const authClientReady = useSelector(isAuthClientReady)
  const authenticated = useSelector(isAuthenticated)

  return (
    <div className="h-screen grid grid-cols-1 place-items-center">
      <div>{ authenticated ? "Authenticated" : "Unauthenticated" }</div>
      <MainButton onClick={ () => dispatch(login()) } name="Login With Internet Identity" />
    </div>
  )
  
}

export default LoginView