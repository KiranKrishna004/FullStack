import React, { useState } from "react"
import ReactDOM from "react-dom"

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td> {value}</td>
      <td>{text === "Positive" ? "%" : null} </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <h4>No feedback given</h4>
  } else {
    return (
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic
            text="Average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <Statistic
            text="Positive"
            value={(good / (good + neutral + bad)) * 100}
          />
        </tbody>
      </table>
    )
  }
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleGood}>Good</button>
      <button onClick={props.handleNeutral}>Neutral</button>
      <button onClick={props.handleBad}>Bad</button>
    </>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
