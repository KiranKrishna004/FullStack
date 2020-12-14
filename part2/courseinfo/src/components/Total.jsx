const Total = ({ add }) => {
  console.log(add)
  const reducer = (acc, cur) => acc + cur
  let sum = add.map((ad) => ad.exercises).reduce(reducer)

  return sum
}
export default Total
