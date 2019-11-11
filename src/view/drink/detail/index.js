import React from 'react'

function DrinkDetailView ({ match: { params } }) {
  return (
    <div className="drink-detail-view">
      drink-detail-view for { params.name }
    </div>
  )
}

export default DrinkDetailView




