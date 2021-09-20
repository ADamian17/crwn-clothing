import { createSelector } from 'reselect';

const selectshop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectshop],
  (shop) => shop.collection
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collection) => ( collection ? collection[collectionUrlParam] : null )
  );
