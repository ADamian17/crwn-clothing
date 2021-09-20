import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import WithSpinner from "../withSpinner";
import collectionOverview from "./collection-overview";

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionOverview)

export default CollectionOverviewContainer;