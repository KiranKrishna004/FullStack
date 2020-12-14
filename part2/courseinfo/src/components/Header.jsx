import React from "react"

const Header = ({ header }) => {
  console.log("props value is", header)
  let headers = header.map((names) => <h1 key={names.id}>{names.name}</h1>)
  return headers
}
export default Header
