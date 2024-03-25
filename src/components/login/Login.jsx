import React from "react";
import LoginRight from "./LoginRight";
import LoginLeft from "./LoginLeft";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";

function Login() {
  return (
    <div>
      <GlobalStyle />
      <LoginLeft />
      <LoginRight />
    </div>
  );
}

export default Login;
