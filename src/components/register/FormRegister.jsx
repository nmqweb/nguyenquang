import React, { useState } from "react";
import InputRegister from "./InputRegister";
import { FormInputContainer, FormButton } from "./RegisterStyle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const urlApi = "https://65f263d6034bdbecc764adaa.mockapi.io/register";

const RegisterSchema = yup.object({
  fullName: yup
    .string()
    .min(5, "Full Name at least 5 characters")
    .required("Full Name is required"),
  userName: yup
    .string("User Name at least 10 characters")
    .min(10, "User Name at least 10 characters")
    .required("User Name is required"),
  email: yup
    .string()
    .email("Email is not valid")
    .min(10, "Email is required")
    .required("Email is required"),
  phoneNumber: yup
    .string("Phone Number not valid")
    .min(10, "Phone Number must be a number at 10 characters")
    .required("Phone Number is required")
    .matches(
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
      "Phone Number must be a number at 10 characters"
    ),
  password: yup
    .string()
    .min(10, "Password at least 10 characters")
    .required("Password is required"),
  confirm: yup
    .string()
    .min(10, "Confirm must match password")
    .oneOf([yup.ref("password"), null], "Confirm must match password")
    .required("Confirm must match password"),
});

function FormRegister(props) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(RegisterSchema),
  });

  const handleRegister = (dataRegister) => {
    const postApi = axios({ method: "POST", url: urlApi, data: dataRegister });

    postApi
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));

    localStorage.setItem("dataRegister", JSON.stringify(dataRegister));

    reset();

    toast.success("Register successful!", {
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
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  };

  const handleLogin = (e) => {
    navigate("/login");
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)}>
        <FormInputContainer>
          <InputRegister
            id="fullName"
            label="Full Name"
            type="text"
            placeholder="Enter Your Full Name"
            register={{ ...register("fullName") }}
            errorMessage={errors.fullName?.message}
          />
          <InputRegister
            id="userName"
            label="User Name"
            type="text"
            placeholder="Enter Your User Name"
            register={{ ...register("userName") }}
            errorMessage={errors.userName?.message}
          />
          <InputRegister
            id="email"
            label="Email"
            type="text"
            placeholder="Enter Your Email"
            register={{ ...register("email") }}
            errorMessage={errors.email?.message}
          />
          <InputRegister
            id="phoneNumber"
            label="Phone Number"
            type="text"
            placeholder="Enter Your Phone Number"
            register={{ ...register("phoneNumber") }}
            errorMessage={errors.phoneNumber?.message}
          />
          <InputRegister
            id="password"
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            register={{ ...register("password") }}
            errorMessage={errors.password?.message}
          />
          <InputRegister
            id="confirm"
            label="Confirm Password"
            type="password"
            placeholder="Enter Your Confirm Password"
            register={{ ...register("confirm") }}
            errorMessage={errors.confirm?.message}
          />
        </FormInputContainer>
        <FormButton>Register</FormButton>
        <FormButton onClick={(e) => handleLogin(e)}>Login</FormButton>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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

export default FormRegister;
