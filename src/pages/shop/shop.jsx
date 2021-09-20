import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../Collection/Collection';

import WithSpinner from '../../components/withSpinner';

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = (props) => {

  const dispatch = useDispatch()
  const isFetching = useSelector(({ shop }) => shop.isFetching);
  const { match } = props

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync())
  }, [])

  return (
    <div className='shop-page' >
      <Route exact path={`${match.path}`} render={(props) =>
        <CollectionOverViewWithSpinner
          isLoading={isFetching}
          {...props} />} />

      <Route path={`${match.path}/:collection`} render={(props) =>
        <CollectionPageWithSpinner
          isLoading={isFetching}
          {...props} />} />
    </div>
  )

}


export default ShopPage;
