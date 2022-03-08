import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/me.png";
import ME_2 from "../../assets/me-4.jpg"
// import ME2 from "../../assets/me2.png"
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mr</h1>
        <h5 className="text-light">Fullstack Devloper</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
        <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
