import { AnyAction, combineReducers, createStore } from 'redux';
import profileReducer from './store/profileReducer';
import subscriptionReducer from './store/subscriptionReducer';

export interface Subscription {
  name: string;
  number: string;
}

export interface ProfileState {
  user: string
}

export interface SubscriptionState {
  list: Subscription[]
}

export interface ApplicationState {
  profile: ProfileState;
  subscriptions: SubscriptionState;
}

export interface MyReducers<T = {}> {
  [action: string]: (state: T, action: AnyAction) => T;
}

const createMyStore = () => createStore(combineReducers({
  profile: profileReducer,
  subscriptions: subscriptionReducer
  //@ts-ignore
}), {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default createMyStore;
