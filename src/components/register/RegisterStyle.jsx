import { styled, css, createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: ${(props) => props.display};
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: azure;
  @media (max-width: 540px) {
    align-items: flex-start;
  }
`;

export const FormRegisterContainer = styled.div`
  width: 590px;
  height: auto;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 15px 20px #aab2b9;
  background-color: white;
`;
export const Title = styled.h1`
  text-align: center;
  border-bottom: 1px solid #aab2b9;
  padding-bottom: 10px;
`;

export const FormButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  border: none;
  font-size: 20px;
  &:hover {
    background-color: blueviolet;
  }
`;
export const FormInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 540px) {
    max-height: 380px;
    overflow-y: scroll;
  }
`;

export const InputContainer = styled.div`
  width: calc(100% / 2 - 20px);
  margin-top: 20px;
  @media (max-width: 540px) {
    width: 100%;
    margin-top: 10px;
  }
  & label {
    font-weight: bold;
  }
  & input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    outline: none;
    padding-left: 10px;
    margin-top: 10px;
    font-size: 15px;
    &::placeholder {
      color: black;
      font-size: 15px;
    }
  }
`;
