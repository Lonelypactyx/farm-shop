import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/ui/nav/nav";
import StyledHeader from "./style";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
