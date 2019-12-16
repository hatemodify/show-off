import React, { Component } from 'react'
import Header from './components/layout/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './view/main'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <>
          <Header />;
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}
