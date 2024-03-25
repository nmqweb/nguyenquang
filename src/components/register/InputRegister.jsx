import React from "react";
import { InputContainer } from "./RegisterStyle";

const textStyle = { marginTop: "10px", color: "red", fontWeight: "bold" };

function InputRegister({
  id,
  label,
  type,
  placeholder,
  register,
  errorMessage,
}) {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        {...register}
      />
      <p style={textStyle}>{errorMessage}</p>
    </InputContainer>
  );
}

export default InputRegister;
