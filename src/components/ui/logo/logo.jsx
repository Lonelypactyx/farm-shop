import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { useLocation } from "react-router-dom";
import { Text, StyledLogo } from "./style";

function Logo() {
  const { pathname } = useLocation();

  return (
    <StyledLogo {...(pathname === "/" ? { as: "span" } : { to: "/" })}>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
