import React from 'react';
import { useHistory } from 'react-router-dom';

import { MenuItemContainer } from './Menu-item.styles';

import './Menu-item.scss';

const MenuItem = ({ id, title, imageUrl, size, linkUrl }) => {
  const history = useHistory()

  return (
    <MenuItemContainer
      id={id}
      imageUrl={imageUrl}
      size={`${size}`}
      onClick={() => history.push(`${linkUrl}`)}>

      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>


    </MenuItemContainer>
  );
};

export default MenuItem;
