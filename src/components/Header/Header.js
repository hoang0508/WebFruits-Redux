import React from "react";
import { Outlet } from "react-router";
import HeaderContact from "./HeaderContact";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <>
      <HeaderContact />
      <HeaderNav />
      <Outlet />
    </>
  );
};

export default Header;
