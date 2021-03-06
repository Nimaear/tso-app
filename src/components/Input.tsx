import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface InputProps {
}

interface ApplicationState {
  user: string
}

const StyledInput = styled.input`
  border: none;
  display: block;
  margin: 0;
  padding: 0;
  line-height: 44px;
  width: 100%;
  outline: none;
`;
const InputWrapper = styled.div`
  background: #fff;
  display: flex;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  width: 482px;
  padding: 0 24px;
`;

const Input: React.FC<InputProps> = (props) => {
  const user = useSelector((state: ApplicationState) => state.user);
  return (
    <InputWrapper>
      <StyledInput {...props} value={user} />
    </InputWrapper>
  );
};

export default Input;