import React from "react"
import Call from "./Call"
// import Total from "./Total"

const Course = ({ courses }) => {
  for (let i = 0; i < courses.length; i++) {
    return (
      <div>
        <Call courses={courses} id={courses[i].id} />
      </div>
    )
  }
}
export default Course
