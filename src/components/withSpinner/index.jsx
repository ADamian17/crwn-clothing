import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styled';


function WithSpinner(WrappedComponent) {

  const Spinner = ({ isLoading, ...rest }) => isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...rest} />
  )

  return Spinner;
}

export default WithSpinner;
