import React, { useState } from "react";
import { userLogin } from "../../Services/user.service";
import {
  ButtonContainer,
  CustomButton,
  FormContainer,
  FormInput,
  HeaderSpan,
  HeaderTitle,
  SignInContainer,
  TitleContainer,
} from "./SignIn.styles";

function SignIn() {
  const [userCredentials, setuserCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userCredentials);
    const userCred = {
      username,
      password,
      role: "user",
    };
    userLogin(userCred);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setuserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignInContainer>
      <TitleContainer>
        <HeaderTitle variant="subtitle2">I already have an account</HeaderTitle>
        <HeaderSpan variant="body1">
          Sign in with your email and password
        </HeaderSpan>
      </TitleContainer>

      <FormContainer onSubmit={handleSubmit} noValidate autoComplete="off">
        <FormInput
          name="username"
          type="text"
          value={username}
          label="Email"
          required
          onChange={handleChange}
          margin="normal"
          variant="standard"
        />
        <FormInput
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
          label="Password"
          margin="none"
          required
          variant="standard"
        />
        <ButtonContainer>
          <CustomButton variant="contained" color="primary" type="submit">
            Sign in
          </CustomButton>
          <CustomButton
            type="button"
            variant="contained"
            color="primary"
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonContainer>
      </FormContainer>
    </SignInContainer>
  );
}

export default SignIn;
