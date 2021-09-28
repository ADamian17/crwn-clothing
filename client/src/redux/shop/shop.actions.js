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
