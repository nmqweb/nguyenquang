import { css, styled } from "styled-components";

export const RegisterClass = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
  body {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    margin: 0;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    border-radius: 20px;
    border: 1px solid #1f409a;
    background-color: #1f409a;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;
export const TitleContainer = styled.div`
  background: linear-gradient(to right, #1f409a, #2fc5f4);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & button {
    background-color: transparent;
    border-color: #1f409a;
    border-width: 2px;
  }
  & button:hover {
    background-color: #1f409a;
    border-color: transparent;
  }
  & h1,
  p,
  a {
    color: #fff;
  }
`;
export const FormContainer = styled.div`
  width: 50%;
  & button {
    margin-top: 20px;
  }
  & button:hover {
    background-color: transparent;
    border-color: #1f409a;
    border-width: 2px;
    color: #000;
  }
  & form p,
  a {
    font-weight: 300;
    font-size: 10px;
    margin: 0;
    margin-top: 10px;
    display: inline;
  }
  & form p a {
    color: #1f409a;
    font-weight: 700;
  }
`;
export const IconRegister = styled.div`
  margin: 20px 0;
  & a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    padding: 10px;
    & svg {
      font-size: 20px;
    }
  }
`;
