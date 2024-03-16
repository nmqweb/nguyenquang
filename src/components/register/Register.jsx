import React from "react";
import * as ClassRegister from "./ClassRegister";
import InputRegister from "./InputRegister";
import FormRegister from "./FormRegister";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";

function Register() {
  return (
    <>
      <GlobalStyle />
      <ClassRegister.Container>
        <ClassRegister.FormRegisterContainer>
          <ClassRegister.Title>Register</ClassRegister.Title>
          <FormRegister />
        </ClassRegister.FormRegisterContainer>
      </ClassRegister.Container>
    </>
  );
}

export default Register;
