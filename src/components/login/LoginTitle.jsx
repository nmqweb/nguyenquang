import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  background: linear-gradient(to right, #1f409a, #2fc5f4);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Title = styled.h1`
  font-weight: 800;
  margin: 0;
  &.formTitle {
    color: #fff;
  }
`;
const TitleContent = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: #fff;
`;
export const Button = styled.button`
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
  border-width: 2px;
  &:active {
    transform: scale(0.95);
  }
  &.titleButton {
    background-color: transparent;
    border-color: #1f409a;
    border-width: 2px;
  }
  &.formButton {
    margin-top: 20px;
    &:hover {
      background-color: transparent;
      border-color: #1f409a;
      border-width: 2px;
      color: #000;
    }
  }
  &:hover {
    background-color: #1f409a;
    border-color: transparent;
  }
`;
const Links = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  &.titleLink {
    color: #fff;
  }
  &.loginLinkSocial {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
`;
export { Links };

function LoginTitle(props) {
  return (
    <TitleContainer>
      <Title className="formTitle">CIT EDU SHOP</Title>
      <TitleContent>Học lập trình cùng CIT Education</TitleContent>
      <Button className="titleButton">
        <Links className="titleLink" href="./register">
          Register
        </Links>
      </Button>
    </TitleContainer>
  );
}

export default LoginTitle;
