import React, { Component } from 'react'
import './layout.scss'
export default class SearchForm extends Component {
  render () {
    return (
      <div className='search_form'>
        <input type='text' placeholder='please...' />
        <button type='button' className='btn_search'>
          search
        </button>
      </div>
    )
  }
}
