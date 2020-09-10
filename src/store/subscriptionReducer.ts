import { AnyAction } from 'redux';
import { MyReducers, Subscription, SubscriptionState } from '../store';



export const setSubscriptions = (subs: Subscription[]) => ({
  type: 'SET_SUBSCRIPTIONS',
  subs
});


const reducer: MyReducers<SubscriptionState> = {
  SET_SUBSCRIPTIONS: (state, { subs }) => ({
    ...state,
    list: subs
  }),
  SET_USER: (state, { user }) => {
    if (user === 'Juho') {
      return {
        ...state,
        list: [{ name: 'super duper sub', number: '0766666666' }, ...state.list]
      }
    } else {
      return state;
    }
  },
}

const subscriptionReducer = (state = { list: [] }, action: AnyAction) => {
  const { type } = action;
  if (reducer[type]) {
    return reducer[type](state, action);
  }
  return state;
}

export default subscriptionReducer;