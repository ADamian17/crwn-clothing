import { takeLatest, put, all, call } from 'redux-saga/effects';

import { googleProvider, auth, createUserProfileDocument } from '../../fireBase/firebase';

import UserTypes from './user.types';
import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure } from './user.actions';

export function* signInWithGoogle () {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user)
    const userSnashot = yield userRef.get()

    yield put(googleSignInSuccess({
      id: userSnashot.id, 
      ...userSnashot.data()
    }));
  } catch (error) {
    yield put(googleSignInFailure(error))
  }
}

export function* signInWithEmail ({ payload }) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword( payload.email, payload.password )
    const userRef = yield call(createUserProfileDocument, user)
    const userSnashot = yield userRef.get()

    yield put(emailSignInSuccess({
      id: userSnashot.id, 
      ...userSnashot.data()
    }));
  } catch (error) {
    yield put(emailSignInFailure(error))
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