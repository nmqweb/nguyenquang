import React from "react";
import styled from "styled-components";
import { Links } from "./LoginTitle";

const ContainerSocial = styled.div`
  margin: 20px;
`;

function LinkLogin() {
  return (
    <ContainerSocial>
      <Links className="loginLinkSocial">
        <i className="fab fa-facebook-f"></i>
      </Links>
      <Links className="loginLinkSocial">
        <i className="fab fa-google-plus-g"></i>
      </Links>
      <Links className="loginLinkSocial">
        <i className="fab fa-linkedin-in"></i>
      </Links>
    </ContainerSocial>
  );
}

export default LinkLogin;
