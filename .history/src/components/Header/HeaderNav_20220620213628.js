import { useAuthContext } from "components/context/Auth-Context";
import React, { useEffect, useRef } from "react";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Header.scss";

const menuLink = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/page",
    title: "Pages",
  },
  {
    url: "/service",
    title: "Service",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const HeaderNav = () => {
  // scroll Nav
  const navbar = useRef(null);
  useEffect(() => {
    const handleFixed = () => {
      if (window.scrollY > 200) {
        navbar.current.classList.add("is-fixed");
      } else {
        navbar.current.classList.remove("is-fixed");
      }
    };
    window.addEventListener("scroll", handleFixed);
    return () => {
      window.removeEventListener("scroll", handleFixed);
    };
  }, []);
  const { cartItem } = useAuthContext();
  const numberCart =
    cartItem && cartItem.length > 0 && cartItem.map((item) => item).length;
  return (
    <div className="header-nav" ref={navbar}>
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-menu">
          <ul className="header-menu--list">
            {menuLink &&
              menuLink.length > 0 &&
              menuLink.map((item) => (
                <li className="header-menu--item" key={item.title}>
                  <NavLink to={item.url} className="header-menu--link">
                    {item.title}
                  </NavLink>
                </li>
              ))}
          </ul>
          <div className="header-cart">
            <FaCartPlus className="header-cart--icon" />
            <span className="header-cart--number">{numberCart || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
