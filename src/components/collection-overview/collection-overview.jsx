import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import PreviewCollection from '../../components/preview_collection/PreviewColection';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {

  const collectionsList = collections.map(({ id, ...otherCollectionProps }) => (
    <PreviewCollection key={id} {...otherCollectionProps} />
  ));

  return (
    <div className="collections-overview">
      {collectionsList}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);