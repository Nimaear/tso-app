import { AnyAction, createStore } from 'redux';

export const setUser = (user: string) => ({
  type: 'SET_USER',
  user
});

function mainReducer(state = { user: '' }, action: AnyAction) {
  switch (action.type) {
    case 'SET_USER':
      const { user } = action;
      return {
        ...state,
        user
      }
    case 'SOMETHING':
      return {
        ...state,
        user: 'God'
      }
    default:
      return state
  }
}

const createMyStore = () => createStore(mainReducer, {
  user: ''
});

export default createMyStore;
