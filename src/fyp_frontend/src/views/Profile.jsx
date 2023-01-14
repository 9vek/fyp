import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from "react-router-dom";

import MainButton from "../components/MainButton"
import { currentAccount, logout } from "../store/auth"

const Profile = (props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const account = useSelector(currentAccount)

  const doLogout = async () => {
    await dispatch(logout())
    navigate('/')
  }

  return (
    <div className="grid grid-cols-1 place-items-center p-32">
      <div className="relative w-96 h-fit px-8 bg-white rounded-md shadow-md flex flex-col">
        <div className="absolute left-4 -top-8 grid grid-cols-1 place-items-center w-32 h-32 rounded-full bg-white">
          <div className="w-28 h-28 rounded-full bg-stone-100"></div>
        </div>
        <div className="pl-32 pt-4">
          <div className="text-xs text-stone-500 font-bold border-b-2">username</div>
          <div className="text-md text-stome-700 font-bold">{ account.nickname }</div>
        </div>
        <div className="pt-12">
          <div className="text-xs text-stone-500 font-bold border-b-2">identity</div>
          <div className="text-sm text-stome-600 font-bold">{ account.identity }</div>
        </div>
        <div className="pt-4">
          <div className="text-xs text-stone-500 font-bold border-b-2">registration time</div>
          <div className="text-sm text-stome-600 font-bold">{ account.registration_time }</div>
        </div>
        <div className="pt-4">
          <div className="text-xs text-stone-500 font-bold border-b-2">signature</div>
          <div className="text-sm text-stome-600 font-bold">{ account.signature }</div>
        </div>
        <div className="w-fit mb-2 flex space-x-4 mt-auto pt-8 pb-4">
          <MainButton name="Edit" />
          <MainButton name="Logout" onClick={doLogout} />
        </div>
      </div>
    </div>
  )

}

export default Profile