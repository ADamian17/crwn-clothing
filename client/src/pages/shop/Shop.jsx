import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/Collection-overview.container';
import CollectionContainer from '../Collection/Collection.container';

const ShopPage = (props) => {

  const dispatch = useDispatch()
  const { match } = props

  useEffect(() => {
    dispatch(fetchCollectionStart())
  }, [dispatch])

  return (
    <div className='shop-page' >
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route path={`${match.path}/:collection`} component={CollectionContainer} />
    </div>
  )
}

export default ShopPage;

/* sagas are functions that conditionals runs depending in the expecific action */
