import React, { useEffect, useState } from "react"
import Filter from "./components/Filter"
import Persons from "./components/Persons"
import PersonsForm from "./components/PersonsForm"
import phoneService from "./services/phoneService"
import Notification from "./components/Notification"
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNum, setNewNum] = useState("")
  const [filters, setFilter] = useState("")
  const [add, setAdd] = useState("")
  let displayerr = null

  useEffect(() => {
    phoneService
      .getAll()
      .then((response) => {
        setPersons(response.data)
      })
      .catch(() => {
        alert("Epic fail from getAll")
        setPersons(persons.filter((n) => n.id !== persons.id))
      })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleDel = (delperson) => {
    setPersons(delperson)
  }
  const handleUpf = (id, num) => {
    let changedPersons = [...persons]
    const index = changedPersons.findIndex((element) => element.id === id)
    changedPersons[index].number = num
    setPersons(changedPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification add={add} displayerr={displayerr} />
      <h2>Filter</h2>
      <Filter handleFilter={handleFilter} filters={filters} />

      <h2>Add Contact</h2>
      <PersonsForm
        newName={newName}
        newNum={newNum}
        setNewName={setNewName}
        setNewNum={setNewNum}
        persons={persons}
        setPersons={setPersons}
        handleUpf={handleUpf}
        add={add}
        setAdd={setAdd}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filters={filters} handleDel={handleDel} />
    </div>
  )
}

export default App
