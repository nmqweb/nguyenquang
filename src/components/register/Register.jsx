import React, { useEffect, useState } from "react";
import * as RegisterStyle from "./RegisterStyle";
import FormRegister from "./FormRegister";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import Loading from "./loading/Loading";

export const timeOut = 3000;

function Register() {
  const [displayContainer, setDisplayContainer] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setDisplayContainer("flex");
    }, timeOut);
  }, 1);

  return (
    <>
      <Loading></Loading>
      <GlobalStyle />
      <RegisterStyle.Container display={displayContainer}>
        <RegisterStyle.FormRegisterContainer>
          <RegisterStyle.Title>Register</RegisterStyle.Title>
          <FormRegister />
        </RegisterStyle.FormRegisterContainer>
      </RegisterStyle.Container>
    </>
  );
}

export default Register;
