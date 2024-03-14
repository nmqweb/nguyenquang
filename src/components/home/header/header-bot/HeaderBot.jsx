import React from "react";
import iconHeaderBot from "../../../../img/logo-header-bot.png";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import * as BotClass from "./classHeaderBot.jsx";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function HeaderBot() {
  return (
    <BotClass.containHeaderBot>
      <div>
        <BotClass.imgHeaderBot src={iconHeaderBot}></BotClass.imgHeaderBot>
      </div>
      <BotClass.center>
        <ul>
          <li>sale</li>
          <li>sản phẩm</li>
          <li>đồ lót</li>
          <li>đồ thể thao</li>
          <li>mặc hàng ngày</li>
          <li>nước hoa</li>
          <li>sản xuất riêng</li>
          <li>care&share</li>
        </ul>
      </BotClass.center>
      <BotClass.right>
        <BotClass.inputHeader>
          <div>
            <IoMenu />
          </div>
          <CiSearch />
          <input type="text" placeholder="Tìm kiếm sản phẩm .."></input>
        </BotClass.inputHeader>

        <BotClass.imageHeaderRight
          src={iconHeaderBot}
        ></BotClass.imageHeaderRight>
        <div>
          <Link to="/register">
            <FaUser />
          </Link>
          <IoBagHandle />
        </div>
      </BotClass.right>
    </BotClass.containHeaderBot>
  );
}

export default HeaderBot;
