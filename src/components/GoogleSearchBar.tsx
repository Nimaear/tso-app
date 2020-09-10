import React from 'react';
import Button from './Button';
import Centered from './Centered';
import GoogleLogo from './GoogleLogo';
import Input from './Input';
import MaxWidth from './MaxWidth';

const GoogleSearchBar: React.FC = () => {
  return <MaxWidth>
    <Centered>
      <GoogleLogo />
    </Centered>
    <Centered>
      <Input />
    </Centered>
    <Centered>
      <Button>Google Search</Button>
      <Button>I am feeling lucky</Button>
    </Centered>
  </MaxWidth>
    ;
};

export default GoogleSearchBar;