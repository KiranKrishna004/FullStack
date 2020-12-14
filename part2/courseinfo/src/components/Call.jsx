import React from "react"
import Header from "./Header"
import Content from "./Content"

const Call = ({ courses }, { i }) => {
  console.log(courses)
  return (
    <Header header={courses[i]} />
    //   {/* <Content parts={courses.parts} /> */}
    //   {/* // <Total add={course.parts} /> */}
  )
}
export default Call
