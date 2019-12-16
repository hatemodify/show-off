import React, { Component } from 'react'
import './index.scss'
import dummy from '../../dummy/index'

export default class ListShowOff extends React.Component {
  itemShowOff = ({ title, imgUrl, description, index }) => {
    return (
      <figure key={index}>
        <div className='wrap-thumb'>
          <img src={imgUrl} />
        </div>
        <div className='wrap-info'>
          <strong className='tit-article'>{title}</strong>
          <p className='desc-article'>{description}</p>
        </div>
      </figure>
    )
  }

  render () {
    return (
      <article className='list_showoff'>
        {dummy.arr.map(this.itemShowOff)}
      </article>
    )
  }
}
