import React from "react"
import phoneService from "../services/phoneService"

const Persons = ({ persons, filters, handleDel }) => {
  const handleDelete = (person) => {
    const result = window.confirm(`Delete ${person.name} ?`)
    console.log(result)
    if (result === true) {
      phoneService.del(person.id).then((response) => {
        console.log(response)
        console.log(persons)
        const filperson = persons.filter(
          (perfil) => perfil.name !== person.name
        )
        console.log(filperson)
        handleDel(filperson)
      })
    }
  }

  const result = persons
    .filter(({ name }) => name.includes(filters))
    .map((person) => (
      <div key={person.name}>
        {person.name} {person.number}
        <button onClick={() => handleDelete(person)}>delete</button>
      </div>
    ))
  return <div>{result}</div>
}
export default Persons
