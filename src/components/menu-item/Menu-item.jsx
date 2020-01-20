import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menu-item.scss';


const MenuItem = ({ title, imageUrl, size, history, linkUrl ,match }) => {
  return (
    <div style={{ backgroundImage: `url(${ imageUrl })` }} className={`${size} menu-item `} onClick={() => history.push(`${match}${linkUrl}`)} >
      <div className="background-image"  
       style={{
         backgroundImage: `url: (${ imageUrl })`
       }} />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  )
}

export default withRouter( MenuItem );