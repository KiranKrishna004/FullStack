import React from "react"
import Part from "./Part"

const Content = ({ parts }) => {
  let result = parts.map((part) => (
    <Part key={part.name} name={part.name} exercises={part.exercises} />
  ))
  return result
}
export default Content
