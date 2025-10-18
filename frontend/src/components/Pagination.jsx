import { useState } from "react";
import style from "./Pagination.module.css"

export default function Pagination({length, current, handleChange}) {
  const paginationNumbers = []

  for (let i=1; i <= Math.ceil(length/ 10); i++){
    paginationNumbers.push(i);
  }

  const [numberDisplayed, setNumberDisplayed] = useState(paginationNumbers.slice(0,5))

  function handleNumberDisplayed(status) {
    const startIndex = paginationNumbers.indexOf(numberDisplayed[0])
    if (status === 'increment') {
      setNumberDisplayed(paginationNumbers.slice(startIndex+1, startIndex+6))
    } else if (status === 'decrement'){
      setNumberDisplayed(paginationNumbers.slice(startIndex-1, startIndex+4))
    }
  }

  return (
    <div className={style.container}>
      <button disabled={numberDisplayed[0] === 1} onClick={() => handleNumberDisplayed('decrement')}>&lt;&lt;</button>
      {numberDisplayed.map(page => (
        <button className={page === current ? 'active': ''} onClick={() => handleChange(page)} key={page}>{page}</button>
      ))}
      <button disabled={numberDisplayed[numberDisplayed.length-1] === paginationNumbers[paginationNumbers.length - 1]} onClick={() => handleNumberDisplayed('increment')}>&gt;&gt;</button>
    </div>
  )
}