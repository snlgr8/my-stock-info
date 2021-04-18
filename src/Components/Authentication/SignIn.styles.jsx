import { Button, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";

export const FormContainer = styled.form`
  //background-color: cyan;
  height: 200px;
  margin: 20px;
  padding: 12px;
`;

export const FormInput = styled(TextField)`
  /* default */
  .MuiInput-underline:before {
    border-bottom: 2px solid #46c0a6;
  }
  /* hover (double-ampersand needed for specificity reasons. */
  && .MuiInput-underline:hover:before {
    border-bottom: 2px solid #bee9e4;
  }
  /* focused */
  .MuiInput-underline:after {
    border-bottom: 2px solid #50c5b1;
  }
`;

export const CustomButton = styled.button`
  background-color: #bfeae4;
  border: 1px solid #48c1a8;
  border-radius: 10px;
  height: 30px;
  // margin: 10px;
  margin-right: 10px;
  margin-top: 10px;
  color: #708090;
  //padding: 12px;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 700;
  :hover {
    background-color: #48c1a8;
    cursor: pointer;
  }
`;
export const SignInContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 3px solid #4ac3aa;
  border-right: none;
  width: 380px;
`;

export const HeaderTitle = styled(Typography)``;
export const HeaderSpan = styled(Typography)``;
export const ButtonContainer = styled.div`
  display: flex;
  // background-color: yellow;
  margin-top: 10px;
  //padding-left: 0px;
  //padding: 10px;
`;
export const TitleContainer = styled.div`
  //background-color: red;
  //display: flex;
  //flex-direction: row;
  //TRouBLe
  margin: 20px 10px 5px 10px;
  text-align: center;
  color: #708090;
  justify-content: center;
`;
