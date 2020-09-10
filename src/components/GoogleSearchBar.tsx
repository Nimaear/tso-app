import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';
import Centered from './Centered';
import GoogleLogo from './GoogleLogo';
import Input from './Input';
import MaxWidth from './MaxWidth';

interface GoogleSearchBarProps {
}

interface ApplicationState {
  user: string
}

const GoogleSearchBar: React.FC<GoogleSearchBarProps> = ({ }) => {
  const [searchButtonText, setSearchButtonText] = useState('Google search');

  const change = () => {
    setSearchButtonText('I am changed now')
  }
  const state = useSelector((state: ApplicationState) => state);
  return <MaxWidth>
    <Centered>
      <GoogleLogo />
    </Centered>
    <Centered>
      Logged in user: {state.user}
    </Centered>
    <Centered>
      <Input />
    </Centered>
    <Centered>
      <Button>{searchButtonText}</Button>
      <Button onClick={change}>I am feeling lucky</Button>
    </Centered>
  </MaxWidth>
    ;
};

export default GoogleSearchBar;