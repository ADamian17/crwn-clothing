import {all, call} from 'redux-saga/effects';

/* == Sagas == */
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';


export default function* rootSaga () {
  yield all([
    call(userSagas),
    call(shopSagas),
    call(cartSagas),
  ])
} 