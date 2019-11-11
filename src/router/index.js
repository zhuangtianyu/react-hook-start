import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Nav from '../component/nav'

import HomeView from '../view/home'
import CountView from '../view/count'
import DrinkView from '../view/drink'

const router = (
  <Router>
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={ HomeView } />
        <Route path="/count" component={ CountView } />
        <Route path="/drink" component={ DrinkView } />
      </Switch>
    </div>
  </Router>
)


export default router



