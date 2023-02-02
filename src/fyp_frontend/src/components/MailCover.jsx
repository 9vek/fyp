import React from "react"
import Icon from "@mdi/react"
import { mdiEmail } from "@mdi/js/mdi"

const MailCover = (props) => {

  return (
    <div className="w-full m-1 h-20 bg-white hover:bg-stone-50 flex">
      <div className="m-1 w-12 h-full grid grid-cols-1 place-items-center">
        <Icon path={mdiEmail} size={1.5} className="text-stone-400" />
      </div>
      <div className="pt-4">
        <div className="text-md font-bold">Mail Title</div>
        <div className="text-sm text-stone-400">Author: unknown | Create time: 00:00:00 </div>
      </div>
    </div>
  )

}

export default MailCover