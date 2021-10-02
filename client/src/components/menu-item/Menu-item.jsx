import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  MenuItemContainer,
  BGImage,
  Content,
  Title,
  Subtitle
} from './Menu-item.styles';

const MenuItem = ({ id, title, imageUrl, size, linkUrl }) => {
  const history = useHistory()

  return (
    <MenuItemContainer
      id={id}
      size={`${size}`}
      onClick={() => history.push(`${linkUrl}`)}>
      <BGImage imageUrl={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>Shop Now</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default MenuItem;
