import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './components/Button';
import GoogleSearchBar from './components/GoogleSearchBar';
import Main from './components/Main';
import { setUser } from './store/profileReducer';


const App = () => {
  const dispatch = useDispatch();

  const setNewUserToJuho = () => {
    dispatch(setUser('Juho'))
  }

  const setNewUserToEva = () => {
    dispatch(setUser('Eva'))
  }

  return <Main>
    <GoogleSearchBar />
    <Button onClick={setNewUserToJuho}>Set user to Juho</Button>
    <Button onClick={setNewUserToEva}>Set user to Eva</Button>
  </Main>
};

export default App;
