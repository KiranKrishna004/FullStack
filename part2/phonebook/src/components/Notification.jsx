import React from "react"

const Notification = ({ add, displayerr }) => {
  if (add.length > 0) {
    if (displayerr === false) return <div className="pass">{add}</div>
    else return <div className="fail">{add}</div>
  } else return null
}

export default Notification
