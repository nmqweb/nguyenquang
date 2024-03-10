import React from "react";
import HeaderBot from "./header-bot/HeaderBot";
import HeaderCenter from "./header-center/HeaderCenter";
import HeaderTop from "./header-top/HeaderTop";
function Header() {
  return (
    <div>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBot />
    </div>
  );
}

export default Header;
