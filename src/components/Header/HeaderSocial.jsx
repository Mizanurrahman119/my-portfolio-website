import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/md-mizanur-rahman-b31703182/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mizanurrahman119" target="_blank">
        <FaGithub />
      </a>
      <a href="instagram.com/mizanur719119/" target="_blank">
        <BsInstagram/>
      </a>
    </div>
  );
};

export default HeaderSocial;
