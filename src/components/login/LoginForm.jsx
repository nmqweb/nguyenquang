import React from "react";
import { FormInput, FormButton } from "./LoginStyle";
import LoginInput from "./LoginInput";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { urlApi } from "../register/FormRegister";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

const LoginSchema = yup.object({
  userName: yup
    .string("User Name at least 10 characters")
    .min(10, "User Name at least 10 characters")
    .required("User Name is required"),
  password: yup
    .string()
    .min(10, "Password at least 10 characters")
    .required("Password is required"),
});

function LoginForm() {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(LoginSchema),
  });

  const handelChangeText = (e) => {
    console.log(type);
    if (type == "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const handleLogin = (dataLogin) => {
    console.log(dataLogin);
    const getApi = axios({ method: "GET", url: urlApi });
    const dataRegister = JSON.parse(localStorage.getItem("dataRegister"));
    console.log(dataRegister);
    if (
      dataLogin.userName === dataRegister.userName &&
      dataLogin.password === dataRegister.password
    ) {
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Slide",
      });
      reset();

      setTimeout(() => {
        navigate("/");
      }, 2500);
    } else {
      toast.error("Login error!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Slide",
      });
      reset();
    }
  };
  return (
    <>
      <FormInput onSubmit={handleSubmit(handleLogin)}>
        <LoginInput
          id="userName"
          placeholder="Enter Your User Name"
          type="text"
          name="User Name"
          register={{ ...register("userName") }}
          errorMessage={errors.userName?.message}
        />
        <LoginInput
          id="password"
          placeholder="Enter Your Password"
          type={type}
          icon=<FaEye
            onClick={(e) => {
              handelChangeText(e);
            }}
          />
          name="Password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />
        <FormButton>Login</FormButton>
      </FormInput>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Slide"
      />
    </>
  );
}

export default LoginForm;
