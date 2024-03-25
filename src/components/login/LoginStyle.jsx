import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: aliceblue;
`;
export const FormContainer = styled.div`
  padding: 20px 30px;
  width: 325px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 20px;
  color: black;
  background-color: white;
  box-shadow: 0 15px 20px #aab2b9;
`;
export const FormInput = styled.form`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  & label {
    font-weight: bold;
  }
`;

export const InputStyle = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10px;
  border: 1px solid black;
  border-radius: 25px;
  padding: 5px 10px;

  & input {
    width: 100%;
    border: none;
    height: 100%;
    padding: 5px;
    outline: none;
    font-size: 15px;
    &::placeholder {
      color: black;
      font-size: 15px;
    }
  }
  & svg {
    color: black;
  }
`;

export const FormButton = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 35px;
  border-radius: 25px;
  background-color: blue;
  color: white;
  border: none;
  font-size: 20px;
  &:hover {
    background-color: blueviolet;
  }
`;

export const TextForm = styled.p`
  margin-top: 10px;
  & a {
    color: blue;
    text-decoration-line: underline;
    font-weight: bold;
  }
`;
