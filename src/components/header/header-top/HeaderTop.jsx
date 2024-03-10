import React from "react";
import logoTop from "../../../img/logo-coolmate-top.png";
import * as TopClass from "./classHeaderTop.jsx";

function HeaderTop() {
  return (
    <TopClass.HeaderTopContain>
      <div>
        <TopClass.imgHeaderTop src={logoTop}></TopClass.imgHeaderTop>
        <ul>
          <li>CM24</li>
          <li>84rising</li>
          <li>coolxprint</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Tham Gia CoolClub</li>
          <li>Blog</li>
          <li>Về Coolmate</li>
          <li>Trung tâm CSKH</li>
          <li>Đăng nhập</li>
        </ul>
      </div>
    </TopClass.HeaderTopContain>
  );
}

export default HeaderTop;
