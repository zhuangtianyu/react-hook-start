import React from 'react'
import { Route } from "react-router-dom"
import DrinkListView from './list'
import DrinkDetailView from './detail'
import DrinkSupplierView from './supplier'

import './index.css'

function DrinkView ({ match: { path } }) {
  return (
    <div className="drink-view">
      <div className="drink-view-name">drink-view</div>
      <Route exact path={ `${path}` } component={ DrinkListView } />
      <Route path={ `${path}/detail/:name` } component={ DrinkDetailView } />
      <Route path={ `${path}/supplier/:name` } component={ DrinkSupplierView } />
    </div>
  )
}

export default DrinkView




