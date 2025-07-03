import React from "react";
import Header from "/src/components/blocks/header/header";
import Footer from "/src/components/blocks/footer/footer";
import { Outlet } from "react-router-dom";

function PageWrapper() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageWrapper;
