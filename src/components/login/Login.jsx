import React from "react";
import LoginTitle from "./LoginTitle.jsx";
import LoginForm from "./LoginForm.jsx";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalFormLogin = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const Body = styled.body`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
`;

function Login() {
  return (
    <>
      <GlobalFormLogin></GlobalFormLogin>
      <Body>
        <Container>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
            integrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          <LoginTitle />
          <LoginForm />
        </Container>
      </Body>
    </>
  );
}

export default Login;
