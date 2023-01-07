import React from "react"

const MainButton = (props) => {

    return (
      <div 
        onClick={ props.onClick }
        className="select-none my-4 mx-2 py-2 px-4 text-lg font-bold text-center rounded-md text-stone-50 bg-stone-800 hover:bg-stone-700 cursor-pointer ">
        { props.name }
      </div>
    )
    
}

export default MainButton