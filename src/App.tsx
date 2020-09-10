import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './components/Button';
import GoogleSearchBar from './components/GoogleSearchBar';
import Main from './components/Main';
import { setUser } from './store';



const App = () => {
  const dispatch = useDispatch();

  const setNewUserToJuho = () => {
    dispatch(setUser('Juho'))
  }
  const setNewUserToHenrik = () => {
    dispatch({ type: 'SOMETHING' })
  }

  const setNewUserToEva = () => {
    dispatch(setUser('Eva'))
  }

  return <Main>
    <GoogleSearchBar />
    <Button onClick={setNewUserToJuho}>Set user to Juho</Button>
    <Button onClick={setNewUserToHenrik}>Set user to Henrik</Button>
    <Button onClick={setNewUserToEva}>Set user to Eva</Button>
  </Main>
};

export default App;
