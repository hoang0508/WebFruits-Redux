import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
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
  return (
    <a href="#" className="down" ref={downRef}>
      <FaArrowUp />
    </a>
  );
};

export default Topdown;
