import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/md-rahat-762b37216/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mdrahat225322" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/mrdark1720/?hl=en" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
