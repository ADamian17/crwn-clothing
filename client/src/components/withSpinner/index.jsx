import React from 'react';

import Spinner from '../Spinner';


function WithSpinner(WrappedComponent) {

  return ({ isLoading, ...rest }) => isLoading ? (
    <Spinner />
  ) : (
    <WrappedComponent {...rest} />
  );
}

export default WithSpinner;
