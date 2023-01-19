import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from "react-router-dom";

import MainButton from "../components/MainButton"
import StandardLayout from "../layouts/StandardLayout";
import { currentAccount } from "../store/auth"

const ProfileEdit = (props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const account = useSelector(currentAccount)

  const doSave = async () => {

  }

  const doCancel = async () => {
    navigate('/profile')
  }

  return (
    <StandardLayout>
      <div className="grid grid-cols-1 place-items-center p-32">
        <div className="relative w-96 h-fit px-8 bg-white rounded-md shadow-md flex flex-col">
          <div className="absolute left-4 -top-8 grid grid-cols-1 place-items-center w-32 h-32 rounded-full bg-white">
            <div className="w-28 h-28 rounded-full bg-stone-100"></div>
          </div>
          <div className="pt-32">
            <div className="text-xs text-stone-500 font-bold border-b-2">username</div>
            <input className="mt-2 rounded w-full py-2 px-3 bg-transparent focus:outline-none" placeholder={account.nickname} />
          </div>
          <div className="pt-4">
            <div className="text-xs text-stone-500 font-bold border-b-2">signature</div>
            <input className="mt-2 rounded w-full py-2 px-3 bg-transparent focus:outline-none" placeholder={account.signature} />
          </div>
          <div className="w-fit mb-2 flex space-x-4 mt-auto pt-8 pb-4">
            <MainButton name="Save" onClick={doSave} />
            <MainButton name="Cancel" onClick={doCancel} />
          </div>
        </div>
      </div>
    </StandardLayout>
  )

}

export default ProfileEdit