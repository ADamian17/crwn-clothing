import { takeLatest, put, all, call } from 'redux-saga/effects';

import { googleProvider, auth, createUserProfileDocument } from '../../fireBase/firebase';

import UserTypes from './user.types';
import { 
  signInSuccess, 
  signInFailure 
} from './user.actions';

export function* getSnapshotFromUserAuth (userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnashot = yield userRef.get()

    yield put(signInSuccess({
      id: userSnashot.id, 
      ...userSnashot.data()
    }));
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithGoogle () {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithEmail ({ payload }) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword( payload.email, payload.password )
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error))
  }
}

/* listener for action */
export function* onGoogleSignInStart(){
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ])
}