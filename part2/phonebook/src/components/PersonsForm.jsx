import React from "react"
import phoneService from "../services/phoneService"

const PersonsForm = ({
  newName,
  newNum,
  setNewNum,
  setNewName,
  persons,
  setPersons,
  handleUpf,
  add,
  setAdd,
}) => {
  const addPerson = (event) => {
    event.preventDefault()
    let found = null
    found = persons.find(({ name }) => name === newName)
    const nameObject = {
      name: newName,
      number: newNum,
    }
    if (found != null) {
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one ?`
      )
      if (result === true) {
        phoneService
          .update(found.id, nameObject)
          .then((response) => {
            console.log(response)
            setAdd(`Added ${nameObject.name}`)
            setTimeout(() => {
              setAdd("")
            }, 5000)
          })
          .catch(() => {
            setAdd(
              `Information of ${nameObject.name} has already been removed from server`
            )
            setTimeout(() => {
              setAdd("")
            }, 5000)
            setPersons(persons.filter((n) => n.id !== nameObject.id))
          })
        handleUpf(found.id, nameObject.number)
      }
    } else {
      setPersons(persons.concat(nameObject))
      setNewName("")
      setNewNum("")
      phoneService
        .create(nameObject)
        .then((response) => {
          setPersons(persons.concat(response.data))
          setNewName("")
          setNewNum("")
          setAdd(nameObject.name)
          setTimeout(() => {
            setAdd("")
          }, 2000)
        })
        .catch(() => {
          alert("Epic fail from create")
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }
  return (
    <form onSubmit={addPerson}>
      <div>
        Name:{" "}
        <input
          placeholder="Enter Name Here"
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        Number:{" "}
        <input
          placeholder="Enter Number Here"
          value={newNum}
          onChange={handleNumChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
export default PersonsForm
