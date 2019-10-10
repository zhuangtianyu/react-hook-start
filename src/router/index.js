import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Nav from '../component/nav'

import HomeView from '../view/home'
import CountView from '../view/count'

const router = (
  <Router>
    <div className="app">
      <Nav />
      <Route exact path="/" component={ HomeView } />
      <Route path="/count" component={ CountView } />
    </div>
  </Router>
)


export default router



