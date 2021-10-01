import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/Spinner';

const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/Collection-overview.container'));
const CollectionContainer = lazy(() => import('../Collection/Collection.container'))
const ShopPage = (props) => {

  const dispatch = useDispatch()
  const { match } = props

  useEffect(() => {
    dispatch(fetchCollectionStart())
  }, [dispatch])

  return (
    <div className='shop-page' >
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collection`} component={CollectionContainer} />
      </Suspense>
    </div>
  )
}

export default ShopPage;

/* sagas are functions that conditionals runs depending in the expecific action */
