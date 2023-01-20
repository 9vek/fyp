import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from "react-router-dom";

import MainButton from "../components/MainButton"
import StandardLayout from "../layouts/StandardLayout";
import { currentAccount, updateAccountInfo } from "../store/auth"

import { mdiUpload, mdiCancel, mdiCamera } from "@mdi/js"
import Icon from "@mdi/react";

const ProfileEdit = (props) => {

  const nicknameRef = React.createRef()
  const signatureRef = React.createRef()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const account = useSelector(currentAccount)

  const [nickname, setNickname] = useState(account.nickname)
  const [signature, setSignature] = useState(account.signature)

  useEffect(() => {
    setNickname(account.nickname)
    setSignature(account.signature)
  }, [account])

  const doSave = async () => {
    await dispatch(updateAccountInfo({nickname,signature}))
    navigate('/profile')
  }

  const doCancel = async () => {
    navigate('/profile')
  }

  return (
    <StandardLayout>
      <div className="grid grid-cols-1 place-items-center p-32">
        <div className="relative w-96 h-fit px-8 bg-white rounded-md shadow-md flex flex-col">
          <div className="absolute left-4 -top-8 grid grid-cols-1 place-items-center w-32 h-32 rounded-full bg-white">
            <div className="w-28 h-28 rounded-full cursor-pointer bg-stone-100 grid grid-cols-1 place-items-center">
              <Icon path={mdiCamera} size={2.5} className="text-stone-300" />
            </div>
          </div>
          <div className="pt-32">
            <div className="text-xs text-stone-500 font-bold border-b-2">username</div>
            <input ref={nicknameRef} className="mt-2 rounded w-full py-2 px-3 bg-transparent focus:outline-none" value={nickname} onChange={e => setNickname(e.target.value)} />
          </div>
          <div className="pt-4">
            <div className="text-xs text-stone-500 font-bold border-b-2">signature</div>
            <input ref={signatureRef} className="mt-2 rounded w-full py-2 px-3 bg-transparent focus:outline-none" value={signature} onChange={e => setSignature(e.target.value)} />
          </div>
          <div className="w-fit mb-2 flex space-x-4 mt-auto pt-8 pb-4">
            <MainButton buttonType="success" name="Save" icon={mdiUpload} onClick={doSave} />
            <MainButton name="Cancel" icon={mdiCancel} onClick={doCancel} />
          </div>
        </div>
      </div>
    </StandardLayout>
  )

}

export default ProfileEdit