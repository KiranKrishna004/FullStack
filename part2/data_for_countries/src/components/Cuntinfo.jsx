import React, { useEffect, useState } from "react"
import axios from "axios"

const Cuntinfo = ({ result2 }) => {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${result2.name}`
      )
      .then((response) => {
        setInfo(response.data)
        console.log("data: ", response.data)
        console.log("info", info)
      })
  }, [])
  let { name, capital, population, languages, flag } = result2
  return (
    <div>
      {result2 === null ? null : (
        <div key={name}>
          <h3>{name}</h3>
          <p></p>
          <ul>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
          </ul>
          <h4>Languages:</h4>
          <ul>
            {languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <br />
          <img src={flag} width={300} height={175} alt="Flag" />
          <br />
          <br />
          <h3>Weather in {capital} </h3>
          {info === null ? null : (
            <div>
              Temperature: {info.current.temperature}
              <br />
              <img src={info.current.weather_icons[0]} alt="Temp" />
              <br />
              Wind: {info.current.wind_speed}
              {info.current.wind_dir}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default Cuntinfo
