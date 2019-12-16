import React, { Component } from 'react'
import Nav from './Nav'
import SearchForm from './SearchForm'

import './layout.scss'

export default class header extends Component {
  render () {
    return (
      <header id='appHeader'>
        <h1 className='app_logo'>show-off</h1>
        <SearchForm />
        <Nav />
      </header>
    )
  }
}
