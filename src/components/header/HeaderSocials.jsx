import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abdullah-francisco-426bb0202/"
        target="_blank"
      >
        <BsLinkedin size={30} />
      </a>
      <a href="https://github.com/abdullahomar1997" target="_blank">
        <FaGithub size={30} />
      </a>
      {/* <a href="https://dribbble.com" target="_blank">
        <FiDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
