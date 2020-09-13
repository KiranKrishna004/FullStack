import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const handleVote = () => {
    console.log("clicked")
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const Highest = () => {
    let highest = 0
    let i = 0
    for (i = 0; i < points.length; i++) {
      if (points[i] > points[highest]) {
        highest = i
      }
    }
    return props.anecdotes[highest]
  }
  return (
    <div>
      {props.anecdotes[selected]}
      <p></p>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleVote}>Vote</button>
      <p></p>
      <p>Has {points[selected]} votes</p>
      {Highest()}
    </div>
  )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"))
