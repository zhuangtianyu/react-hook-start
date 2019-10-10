import React, { } from 'react'
import './index.css'

function Count(props) {
  const { count, countName, onCountChange } = props
  return (
    <div className={`count`}>
      <h4>{ countName }</h4>
      <button onClick={() => onCountChange(count - 1)}>-</button>
      <span>count: { count }</span>
      <button onClick={() => onCountChange(count + 1)}>+</button>
    </div>
  )
}

export default Count




