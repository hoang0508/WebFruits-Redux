import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Topdown.scss";
const Topdown = () => {
  const downRef = useRef(null);
  useEffect(() => {
    const handleDownup = () => {
      if (window.scrollY > 400) {
        downRef.current.classList.add("active-down");
      } else {
        downRef.current.classList.remove("active-down");
      }
    };
    window.addEventListener("scroll", handleDownup);
    return () => {
      window.removeEventListener("scroll", handleDownup);
    };
  }, []);

  // handle Click top
  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink
      to="#"
      className="down"
      ref={downRef}
      onClick={() => handleClickTop()}
    >
      <FaArrowUp />
    </NavLink>
  );
};

export default Topdown;
