import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
<<<<<<< HEAD
    [selectCollections],
    collections =>
        collections ? Object.keys(collections).map(key => collections[key]) : []
=======
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
>>>>>>> 2bf3feee947c93878e5953e04695ccc91034a132
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
<<<<<<< HEAD
=======
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
>>>>>>> 2bf3feee947c93878e5953e04695ccc91034a132
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );
