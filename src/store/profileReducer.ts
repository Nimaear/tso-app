import { AnyAction } from 'redux';
import { MyReducers, ProfileState } from '../store';

export const setUser = (user: string) => ({
  type: 'SET_USER',
  user
});


const reducer: MyReducers<ProfileState> = {
  SET_USER: (state, { user }) => ({
    ...state,
    user
  }),
  SOMETHING: (state) => ({
    ...state,
    user: 'God'
  }),
  OZ: (state) => ({
    ...state,
    user: 'Oz'
  }),
}

const profileReducer = (state = { user: '' }, action: AnyAction) => {
  const { type } = action;
  if (reducer[type]) {
    return reducer[type](state, action);
  }
  return state;
}

export default profileReducer;