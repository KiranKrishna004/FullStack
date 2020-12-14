import React, { useState } from "react"
import Cuntinfo from "./Cuntinfo"

const Result = ({ cunt, filter }) => {
  const [show, setShow] = useState(null)

  const handleShow = (name) => {
    setShow(name)
  }

  const result = cunt.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  )

  //Empty condition
  if (filter.length === 0) return <p>Enter name to Find </p>
  //For more than one finds
  else if (result.length > 10) {
    return <div>Too many Countries</div>
  }

  //For exact one find
  else if (result.length === 1) {
    const result1 = result[0]
    return <Cuntinfo result2={result1} />
    // return result1
  }

  //For less than 10 but greater than 1 find
  else if (result.length < 10 && result.length > 1) {
    const result1 = result.map((result2) => (
      <div key={result2.name}>
        {result2.name} <button onClick={() => handleShow(result2)}>Show</button>
      </div>
    ))

    console.log("Result1: ", result1)
    return (
      <div>
        {result1}
        {show === null ? null : <Cuntinfo result2={show} />}
      </div>
    )
  }

  //None Found
  else {
    return <div>None found</div>
  }
}
export default Result
