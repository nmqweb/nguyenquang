import React from "react";
import { InputContainer, InputStyle } from "./LoginStyle";

const textStyle = { marginTop: "10px", color: "red", fontWeight: "bold" };


function LoginInput(props) {
  const { id, placeholder, type, icon, name, register, errorMessage } = props;
  return (
    <InputContainer>
      <label for={id}>
        {name}
        <InputStyle>
          <input id={id} type={type} placeholder={placeholder} {...register} />
          {icon}
        </InputStyle>
      </label>
      <p style={ textStyle}>{errorMessage}</p>
    </InputContainer>
  );
}

export default LoginInput;
