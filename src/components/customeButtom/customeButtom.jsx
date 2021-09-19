import React from 'react';

import { CustomBtn } from './customButton.styled';

const customButton = ({ children, rest }) => {
  return (
    <CustomBtn {...rest}>
      {children}
    </CustomBtn>
  );
};

export default customButton;
