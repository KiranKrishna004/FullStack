import React from "react"
import phoneService from "../services/phoneService"

const handleDelete = ({ person }) => {
  const result = window.confirm(`Delete ${person.name} ?`)
  console.log(result)
  if (result === true) {
    phoneService.del(person.id).then((response) => {
      console.log(response)
    })
  }
}

const Delete = (person) => {
  return <button onClick={() => handleDelete(person)}>delete</button>
}

export default Delete
