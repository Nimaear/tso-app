import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import Button from './Button';
import Centered from './Centered';
import GoogleLogo from './GoogleLogo';
import Input from './Input';
import MaxWidth from './MaxWidth';
import SubscriptionList from './SubscriptionList';

interface GoogleSearchBarProps {
}


const GoogleSearchBar: React.FC<GoogleSearchBarProps> = ({ }) => {
  const [searchButtonText, setSearchButtonText] = useState('Google search');

  const change = () => {
    setSearchButtonText('I am changed now')
  }
  const profile = useSelector((state: ApplicationState) => state.profile);
  return <MaxWidth>
    <SubscriptionList />
    <Centered>
      <GoogleLogo />
    </Centered>
    <Centered>
      Logged in user: {profile.user}
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