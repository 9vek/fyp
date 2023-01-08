import React from "react"

const MainButton = (props) => {

    return (
      <div 
        onClick={ props.onClick }
        className="select-none py-2 px-4 text-lg font-bold text-center rounded-md text-stone-50 bg-stone-700 hover:bg-stone-600 cursor-pointer ">
        { props.name }
      </div>
    )
    
}

export default MainButton