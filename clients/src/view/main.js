import React, { Component } from 'react'
import ListShowOff from '../components/ShowOff/ListShowOff'
import axios from 'axios'
export default class main extends React.Component {
  render () {
    return (
      <article className='contents'>
        <ListShowOff />
      </article>
    )
  }
}
