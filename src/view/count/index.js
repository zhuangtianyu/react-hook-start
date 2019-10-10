import React, { useState } from 'react'

import Count from '../../component/count'

function CountView () {
  const [count, setCount] = useState(0)

  const countName = 'this is a counter'

  const countChange = count => setCount(count)

  return (
    <div className="count-view">
      count-view
      <Count
        count={ count }
        countName={ countName }
        onCountChange={ countChange }
      />
    </div>
  )
}

export default CountView




