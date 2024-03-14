import React from "react";
import { IconRegister } from "./RegisterClass.jsx";
import { GrFacebookOption } from "react-icons/gr";
import { FaGooglePlusG } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

function RegisterIcon(props) {
  return (
    <IconRegister>
      <a href="#">
        <GrFacebookOption />
      </a>
      <a href="#">
        <FaGooglePlusG />
      </a>
      <a href="#">
        <RiLinkedinFill />
      </a>
    </IconRegister>
  );
}

export default RegisterIcon;
