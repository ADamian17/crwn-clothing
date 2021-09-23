import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopTypes from './shop.types'; 

import {firestore, convertColectionsSnapsotToMap } from '../../fireBase/firebase';

import { 
  fetchCollectionsSuccess, 
  fetchCollectionFailure 
} from './shop.actions';


export function* fetchCollectionsAsync() {  
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call( convertColectionsSnapsotToMap, snapshot ); 
    
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart(){
  yield takeLatest(
    ShopTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync 
  )
}

export function* shopSagas () {
  yield all([
    call(fetchCollectionsStart)
  ])
}