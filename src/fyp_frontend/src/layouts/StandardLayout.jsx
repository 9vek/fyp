import React from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Loading from "../components/Loading"

const StandardLayout = (props) => {

  return (
    <div className="">
      <Loading />
      <Header />
      <div className="min-h-screen bg-stone-50">
        <div className="w-full h-16"></div>
        {props.children}
      </div>
      <Footer />
    </div>
  )

}

export default StandardLayout