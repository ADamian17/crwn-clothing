import {firestore, convertColectionsSnapsotToMap } from '../../fireBase/firebase';
import ShopTypes from "./shop.types";

export const fetchCollectionStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILRE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    try {
      const collectionRef = firestore.collection('collections');
      
      dispatch(fetchCollectionStart());
      const snapshot = await collectionRef.get();
      const collectionMap = convertColectionsSnapsotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap))

    } catch (error) {
      dispatch(fetchCollectionFailure(error.message));
    }
  }
}
