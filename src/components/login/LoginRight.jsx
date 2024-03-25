import React from "react";
import LoginForm from "./LoginForm";
import { Container, FormContainer, TextForm } from "./LoginStyle";
import { useNavigate, Link } from "react-router-dom";

function LoginRight() {
  const navigate = useNavigate();

  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>
        <LoginForm />
        <TextForm>
          Don't Have Account <Link to="/register">Register</Link>
        </TextForm>
      </FormContainer>
    </Container>
  );
}

export default LoginRight;
