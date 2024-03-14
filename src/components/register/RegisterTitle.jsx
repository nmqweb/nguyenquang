import React from "react";
import { TitleContainer } from "./RegisterClass.jsx";

function RegisterTitle() {
  return (
    <TitleContainer>
      <h1>CIT EDU SHOP</h1>
      <p>Học lập trình cùng CIT Education</p>
      <button>
        <a href="/login">Login</a>
      </button>
    </TitleContainer>
  );
}

export default RegisterTitle;
