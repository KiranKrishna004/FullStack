import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import Result from "./components/Result"

const App = () => {
  //States
  const [cunt, setCunt] = useState([])

  const [filter, setFilter] = useState("")

  //initialization of filter
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCunt(response.data)
    })
  }, [])

  return (
    <div>
      <form>
        <div>
          Find:
          {"  "}
          <input
            placeholder="Enter Name Here"
            value={filter}
            onChange={handleFilter}
          />
        </div>
      </form>
      <h2>Countries</h2>
      <p></p>
      <Result cunt={cunt} filter={filter} />
    </div>
  )
}
export default App
