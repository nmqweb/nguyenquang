import React, { useState } from "react";
import RegisterIcon from "./RegisterIcon";
import { FormContainer } from "./RegisterClass.jsx";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const urlApi = "https://65bcaa3bb51f9b29e931fc70.mockapi.io/api/user/user";

const RegisterSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function RegisterForm() {
  const [dataRegister, setDataRegister] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });
  const handleRegister = dataSubmit => {
    console.log(dataSubmit);
    const postApi = axios({ method: "POST", url: urlApi, data: dataSubmit});

    postApi
      .then((data) => {
        console.log(data);
        setDataRegister(dataSubmit);
      })
      .catch((err) => console.log(err));

    localStorage.setItem("dataRegister", JSON.stringify(dataRegister));

    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleRegister)}>
        <h1>Create Account</h1>
        <RegisterIcon />
        <span>or use your email for registration</span>
        <input type="text" {...register("name")} placeholder="Name" />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
        <input type="text" {...register("email")} placeholder="Email" />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <p>
          ALREADY HAVE AN ACCOUNT ? <a href="./login">lOGIN NOW</a>
        </p>
        <button>Register</button>
      </form>
    </FormContainer>
  );
}

export default RegisterForm;
