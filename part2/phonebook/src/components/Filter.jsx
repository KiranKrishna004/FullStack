import React from "react"

const Filter = ({ filters, handleFilter }) => {
  return (
    <form>
      <div>
        Filter:{" "}
        <input
          placeholder="Enter Filter Here"
          value={filters}
          onChange={handleFilter}
        />
      </div>
    </form>
  )
}
export default Filter
