import React from "react";
import Button from "/src/components/ui/button/button";
import { useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  const NavBtn =
    pathname !== "/" ? (
      <Button link="/" $navLink maxWidth>
        Главная
      </Button>
    ) : (
      <Button link="/buy">Купить</Button>
    );

  return <nav>{NavBtn}</nav>;
}

export default Nav;
