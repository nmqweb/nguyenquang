import React from "react";
import { useState } from "react";
import LinkLogin from "./LinkLogin";
import styled from "styled-components";
import { Button } from "./LoginTitle.jsx";
import { Title } from "./LoginTitle.jsx";
import { Links } from "./LoginTitle.jsx";

const FormContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormLogin = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const FromText = styled.p`
  &,
  a {
    font-weight: 300;
    font-size: 10px;
    margin: 0;
    margin-top: 10px;
    display: none;
    @media (max-width: 768px) {
      display: inline;
    }
  }
  & a {
    color: #1f409a;
    font-weight: 700;
  }
`;

export const InputForm = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;
function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const userRegisterLocalStorage = JSON.parse(
    localStorage.getItem("userSignUp")
  );

  const login = (e) => {
    e.preventDefault();
    if (name == "" || password == "") {
      alert("Please enter your login");
    } else {
      if (
        name == userRegisterLocalStorage.name &&
        password == userRegisterLocalStorage.password
      ) {
        alert("Login successfully");
        window.location.href = "register";
      } else {
        alert("Login error");
        setName("");
        setPassword("");
      }
    }
  };
  return (
    <FormContainer>
      <FormLogin>
        <Title>Sign In</Title>
        <LinkLogin />
        <span style={{ fontSize: "12px" }}>or use your account </span>
        <InputForm
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <InputForm
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <Links href="#">Forgot your password?</Links>
        <FromText>
          DON'T HAVE AN ACCOUNT ?{" "}
          <Links className="formLink" href="./register">
            REGISTER NOW
          </Links>
        </FromText>
        <Button className="formButton" onClick={(e) => login(e)}>
          Login
        </Button>
      </FormLogin>
    </FormContainer>
  );
}

export default LoginForm;
