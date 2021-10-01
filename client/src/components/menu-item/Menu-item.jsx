import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menu-item.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, className }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      className={`${size} ${className} menu-item`}
      onClick={() => history.push(`${linkUrl}`)}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
