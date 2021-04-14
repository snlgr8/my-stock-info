import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../../config/firebase';

function Login() {
  const loginUser = () => {
    auth.signInWithPopup(provider).then((u) => {
      console.log(u);
    });
  };
  return (
    <div>
      <SigninButton onClick={loginUser()}>Login</SigninButton>
    </div>
  );
}

export default Login;
const SigninButton = styled.button``;
