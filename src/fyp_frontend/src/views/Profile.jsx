import React, { useEffect } from "react"
import { useSelector } from 'react-redux'
import MainButton from "../components/MainButton"
import { getAuthClient, isAuthenticated } from "../store/auth"

const Profile = (props) => {

  return (
    <div
      className="container mb-32 mt-4 mx-auto min-h-fit max-w-[21cm] bg-white shadow rounded overflow-hidden"
    >
      <table className="text-stone-900 text-2xl w-full m-4">
        <tbody>
          <tr>
            <td>id</td>
            <td>aaaaaaaaaaaa</td>
          </tr>
          <tr>
            <td>name</td>
            <td>aaaaaaaaaaaa</td>
          </tr>
          <tr>
            <td>email</td>
            <td>aaaaaaaaaaaa</td>
          </tr>
        </tbody>
      </table>
      <div className="w-fit mx-4 mt-4 mb-2 flex">
        <MainButton name="Edit" />
        <MainButton name="Logout" />
      </div>
    </div >
  )

}

export default Profile