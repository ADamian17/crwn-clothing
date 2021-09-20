import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore } from '../../fireBase/firebase';
import { convertColectionsSnapsotToMap } from '../../fireBase/firebase';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../Collection/Collection';

import WithSpinner from '../../components/withSpinner';

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class shopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertColectionsSnapsotToMap(snapshot);
      updateCollections(collectionMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state;
    return (
      <div className='shop-page' >
        <Route exact path={`${match.path}`} render={(props) =>
          <CollectionOverViewWithSpinner
            isLoading={loading}
            {...props} />} />

        <Route path={`${match.path}/:collection`} render={(props) =>
          <CollectionPageWithSpinner
            isLoading={loading}
            {...props} />} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(shopPage);
