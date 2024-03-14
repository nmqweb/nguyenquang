import React from "react";
import RegisterForm from "./RegisterForm.jsx";
import RegisterTitle from "./RegisterTitle.jsx";
import { createGlobalStyle } from "styled-components";
import * as Class from "./RegisterClass.jsx";

const GlobalStyleRegister = createGlobalStyle`
  ${Class.RegisterClass}
`;
const Container = Class.RegisterContainer;
function Register() {
  return (
    <>
      <GlobalStyleRegister></GlobalStyleRegister>
      <Container>
        <RegisterTitle />
        <RegisterForm />
      </Container>
    </>
  );
}

export default Register;
