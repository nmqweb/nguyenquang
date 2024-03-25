import React, { useEffect, useState } from "react";
import * as Style from "./LoadingStyle.jsx";
import { timeOut } from "../Register.jsx";

function Loading() {
  const [displayLoading, setdisplayLoading] = useState("block");
  useEffect(() => {
    setTimeout(() => {
      setdisplayLoading("none");
    }, timeOut);
  }, 1);
  return (
    <Style.loadingContainer display={displayLoading}>
      <Style.loadingProgress display={displayLoading}>
        <Style.colorLoading></Style.colorLoading>
      </Style.loadingProgress>
    </Style.loadingContainer>
  );
}

export default Loading;
