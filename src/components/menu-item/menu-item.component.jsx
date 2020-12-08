import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

/* By being wrapped by withRouter, the component gain access to history,
linkUrl, match */
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)} >
    <div
      className='background-image'
      style={{backgroundImage: `url(${imageUrl})`}}
    />
    <div className='content'>
      <h1 className='title'>{ title.toUpperCase() }</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem); // Wrapper the component with withRouter