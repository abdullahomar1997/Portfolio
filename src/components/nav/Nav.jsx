import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "active" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      {/* <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "active" ? "active" : ""}
      >
        <AiOutlineUser />
      </a> */}
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "active" ? "active" : ""}
      >
        <BsJournalBookmark />
      </a>
      {/* <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "active" ? "active" : ""}
      >
        <RiServiceLine />
      </a> */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "active" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
