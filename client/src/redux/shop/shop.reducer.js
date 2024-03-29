import ShopTypes from './shop.types';


const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  errorMessage: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopTypes.FETCH_COLLECTIONS_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        collection: action.payload
      }
    case ShopTypes.FETCH_COLLECTIONS_FAILRE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }    
    default:
      return state;
  }
};

export default shopReducer;
