import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../Collection/Collection';

const shopPage = ({ match }) => {

  return (
    <div className='shop-page' >
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collection`} component={CollectionPage} />
    </div>
  )
}

export default shopPage;
